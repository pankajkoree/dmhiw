import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

// api key from gemini
const gemini_api_key = process.env.API_KEY;

const googleAI = new GoogleGenerativeAI(gemini_api_key as string);
const geminiModel = googleAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const prompt = "tell about nextjs";

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();
    if (!question) {
      return Response.json({ error: "Question is required" }, { status: 400 });
    }

    const result = await geminiModel.generateContent(question);
    const response = await result.response.text();

    return Response.json({ result: response }, { status: 200 });
  } catch (error) {
    console.error("Response error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
