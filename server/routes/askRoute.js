import express from "express";
import { askController } from "../controllers/askController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

requireSignIn;
const router = express.Router();

router.post("/", requireSignIn, askController);

export { router as askRouter };
