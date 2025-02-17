const gemini_api_key = process.env.API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiModel = googleAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

var question = "what is the value of pie in maths ?";
const generate = async (request) => {
  try {
    const prompt = question;
    const result = await geminiModel.generateContent(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
  } catch (error) {
    console.log("response error", error);
  }
};

app.post("/api/content", async (req, res) => {
  let data = req.body.question;
  var result = await generate(data);
  console.log(result);
  res.json({ result: result });
});
