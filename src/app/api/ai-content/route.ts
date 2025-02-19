import { GoogleGenerativeAI } from "@google/generative-ai";

const gemini_api_key = process.env.API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiModel = googleAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req) {
  try {
    const { question } = await req.json();
    if (!question) {
      return Response.json({ error: "Question is required" }, { status: 400 });
    }

    const result = await geminiModel.generateContent(question);
    const response = await result.response.text(); // Correct response handling

    return Response.json({ result: response }, { status: 200 });
  } catch (error) {
    console.error("Response error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
