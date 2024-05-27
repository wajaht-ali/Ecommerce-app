import { GoogleGenerativeAI } from "@google/generative-ai";
import { PromptModel } from "../models/prompts.js";

//generate text
export const askController = async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const prompt = req.body.prompt;
    const id = req.user._id;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    //saving to the database
    const save = new PromptModel({
      title: prompt,
      prompt: text,
      user: id,
    }).save();

    return res.status(201).send({ success: true, text: text });
  } catch (error) {
    console.log(`Error with ask ${error}`);
    res.status(404).send({
      success: false,
      message: "Error with ask controller",
      error,
    });
  }
};

//get all prompts
export const getAllPromptsController = async (req, res) => {
  try {
    const { id } = req.params;
    const prompts = await PromptModel.find({ user: id });
    return res.status(201).send({
      success: true,
      message: "All prompts fetched",
      prompts,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Error with prompts controller",
      error,
    });
    console.log(`Error with getting all prompts ${error}`);
  }
};
