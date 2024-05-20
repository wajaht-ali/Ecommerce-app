import express from "express";
import { newsletterController } from "../controllers/miscController.js";

const router = express.Router();
router.post("/newsletter", newsletterController);
// router.post('/create-checkout-session', stripeController);
export { router as miscRouter };
