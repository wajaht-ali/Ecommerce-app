import express from "express";
import {
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//register user
router.post("/register", registerController);

//login user
// router.post("/login", loginController);
router.post('/login', loginController);

//test router
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
