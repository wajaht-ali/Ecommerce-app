import { GoogleGenerativeAI } from "@google/generative-ai";
import { PromptModel } from "../models/prompts.js";
export const askController = async (req, res) => {
  try {
    console.log(req.user);
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const prompt = req.body.prompt;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    //saving to the database
    const save = new PromptModel({
      title: req.prompt,
      prompt: text,
      user: null
    }).save();

    return res
      .status(201)
      .send({ success: true, text: text });
  } catch (error) {
    console.log(`Error with ask ${error}`);
    res.status(404).send({
      success: false,
      message: "Error with ask controller",
      error,
    });
  }
};
