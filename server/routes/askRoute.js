import express from "express";
import { askController, getAllPromptsController, getPromptById } from "../controllers/askController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

requireSignIn;
const router = express.Router();

//generate text
router.post("/", requireSignIn, askController);

//fetch prompts by user id
router.get("/fetch-prompts/:id", getAllPromptsController);

//fetch single prompt by id
router.get("/c/:id", getPromptById);

export { router as askRouter };
