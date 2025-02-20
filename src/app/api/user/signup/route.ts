import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userMomdel";
import bcryptjs from "bcryptjs";
import { sendMail } from "../../../../helper/mailer";

connect();

export const POST = async (request: NextRequest) => {
  try {
    const requestBody = await request.json();

    const { username, email, password } = requestBody;

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exits" },
        { status: 400 }
      );
    }

    let salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    await sendMail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unknown error" },
      { status: 500 }
    );
  }
};
