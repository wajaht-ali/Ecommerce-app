import express from "express";
import { getUsersController } from "../controllers/userController.js";

const router = express.Router();

router.get("/get-users", getUsersController);
export { router as UserRouter };
