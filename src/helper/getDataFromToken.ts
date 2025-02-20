import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromToken = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const secret = process.env.TOKEN_SECRET;

    if (!secret) {
      throw new Error(
        "TOKEN_SECRET is not defined in the environment variables."
      );
    }

    const decodedToken = jwt.verify(token, secret);
    return decodedToken;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error("An unknown error occurred");
  }
};
