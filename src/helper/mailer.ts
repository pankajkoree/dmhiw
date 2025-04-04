import nodemailer from "nodemailer";
import User from "../models/userMomdel";
import bcryptjs from "bcryptjs";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface SendMailOptions {
  email: string;
  emailType: string;
  userId: string;
}

export const sendMail = async ({
  email,
  emailType,
  userId,
}: SendMailOptions) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: new Date(Date.now() + 3600000),
        },
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPassword: hashedToken,
          verifyPasswordTokenExpiry: new Date(Date.now() + 3600000),
        },
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || "587"),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: process.env.NODE_ENV === "production",
    } as SMTPTransport.Options);

    const verificationUrl = `${process.env.DOMAIN}/verifyemail?token=${hashedToken}`;

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `
        <p>Click <a href="${verificationUrl}">here</a> to 
        ${
          emailType === "VERIFY" ? "verify your email" : "reset your password"
        }</p>
        <p>Or copy and paste this link in your browser: <br> ${verificationUrl}</p>
      `,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error("An unknown error occurred");
  }
};
