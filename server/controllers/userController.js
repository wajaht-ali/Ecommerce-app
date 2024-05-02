import UserModel from "../models/userModel.js";

// get all users
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

//delete single user
export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await UserModel.findByIdAndDelete(id);
    res.status(201).send({
      success: true,
      message: "User deleted sucessfully!",
      user,
    });
  } catch (error) {
    console.log(`Error with delete user controller ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with delete user controller",
      error,
    });
  }
};
