import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "../../../../models/userMomdel";

export const POST = async (request: NextRequest) => {
  try {
    await connect(); // ✅ Ensure DB is connected

    const reqBody = await request.json();
    const { token } = reqBody;

    if (!token) {
      return NextResponse.json(
        { error: "Token is required" },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // ✅ Find user with valid verification token
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      console.log("Invalid or expired token");
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // ✅ Update user to verified
    user.isVerified = true;
    user.verifyToken = null;
    user.verifyTokenExpiry = null;

    await user.save();

    return NextResponse.json(
      { message: "Email verified successfully", success: true },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error verifying email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
