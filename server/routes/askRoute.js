import express from "express";
import { askController, getAllPromptsController } from "../controllers/askController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

requireSignIn;
const router = express.Router();

//generate text
router.post("/", requireSignIn, askController);

//fetch prompts by id
router.get("/fetch-prompts/:id", getAllPromptsController);
export { router as askRouter };
