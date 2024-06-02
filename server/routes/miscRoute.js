import express from "express";
import { newsletterController, paymentController } from "../controllers/miscController.js";

const router = express.Router();
router.post("/newsletter", newsletterController);

//payment router
router.post('/create-checkout-session', paymentController);
export { router as miscRouter };
