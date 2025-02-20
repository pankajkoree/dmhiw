import nodemailer from "nodemailer";
import User from "@/models/userMomdel";
import bcryptjs from "bcryptjs";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface sendMailOptions {
  email: string;
  emailType: string;
  userId: string;
}

export const sendMail = async ({
  email,
  emailType,
  userId,
}: sendMailOptions) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: new Date(Date.now() + 3600000).toLocaleString(),
        },
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPassword: hashedToken,
          verifyPasswordTokenExpiry: Date.now() + 3600000,
        },
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.mailHost,
      port: process.env.mailPort,
      auth: {
        user: process.env.mailUser,
        pass: process.env.mailPass,
      },
    } as SMTPTransport.Options);

    const mailOptions = {
      from: "tcsuk1998@gmail.com",
      to: email,
      subject: emailType === "VERIFY" ? "Verify your email" : "reset password",
      html: ` <p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
        or copy and paste the link below in your browser. <br> ${
          process.env.DOMAIN
        }/verifyemail?token=${hashedToken}
        </p>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error("An unknown error occurred");
  }
};
