import { NextResponse, NextRequest } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userMomdel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (request: NextRequest) => {
  try {
    await connect();

    const reqBody = await request.json();

    const { email, password } = reqBody;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return NextResponse.json(
        { error: "User doesn't exist" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);

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

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
};
