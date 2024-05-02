import UserModel from "../models/userModel.js";

export const getUsersController = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(201).send({
      success: true,
      message: "Get all users succesfully!",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error with user controller",
      error,
    });
  }
};
