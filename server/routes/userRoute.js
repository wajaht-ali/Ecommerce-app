import express from "express";
import { deleteUserController, getUsersController } from "../controllers/userController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//get all users
router.get("/get-users", getUsersController);

//delete single user
router.delete("/delete-user/:id", requireSignIn, isAdmin, deleteUserController);
export { router as UserRouter };
