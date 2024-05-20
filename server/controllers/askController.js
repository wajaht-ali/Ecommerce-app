import { GoogleGenerativeAI } from "@google/generative-ai";
export const askController = async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const prompt = req.body.message;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = result.response;
    //structure validation
    const responseText = response.message.candidates[0].content.parts[0].text;
    return res.status(201).send({ success: true, message: response, text: responseText });
  } catch (error) {
    console.log(`Error with ask ${error}`);
    res.status(404).send({
      success: false,
      message: "Error with ask controller",
      error,
    });
  }
};
