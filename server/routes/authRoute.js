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
router.post("/login", loginController);

//protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//test router
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
