import { NextResponse, NextRequest } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userMomdel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (request: NextRequest) => {
  try {
    await connect();
    console.log("✅ Database connected successfully");

    const reqBody = await request.json();
    console.log("📝 Request Body:", reqBody); // Log request data

    const { email, password } = reqBody;

    console.log("🔍 Searching for user with email:", email);

    const user = await User.findOne({ email: email.toLowerCase() });
    console.log("👤 User Found:", user); // Log user data

    if (!user) {
      console.log("❌ No user found with this email.");
      return NextResponse.json(
        { error: "User doesn't exist" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    console.log("🔑 Password Match:", validPassword);

    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        loggedIn: true,
      },
      process.env.TOKEN_SECRET as string,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({
      message: "Logged In Successfully",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        loggedIn: true,
      },
    });

    response.cookies.set("token", token, { httpOnly: true, path: "/" });

    console.log("✅ User logged in successfully!");

    return response;
  } catch (error) {
    console.error("❌ Login Error:", error); // Log the full error
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
};
