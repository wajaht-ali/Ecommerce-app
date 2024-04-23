import express from "express";
import { newsletterController } from "../controllers/miscController.js";

const router = express.Router();
router.post("/newsletter", newsletterController);
export { router as miscRouter };
