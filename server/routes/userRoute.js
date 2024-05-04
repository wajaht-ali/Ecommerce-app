import express from "express";
import { deleteUserController, getUsersController, singleUserController, updateUserController } from "../controllers/userController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//get all users
router.get("/get-users", getUsersController);

//get single user
router.get("/user/:id", requireSignIn, isAdmin, singleUserController);

//delete single user
router.delete("/delete-user/:id", requireSignIn, isAdmin, deleteUserController);

//update user
router.put("/update-user/:id", requireSignIn, isAdmin, updateUserController);
export { router as UserRouter };
