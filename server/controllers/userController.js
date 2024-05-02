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

//update single user
export const updateUserController = async (req, res) => {
  try {
    const { uid } = req.params;
    const { name, phone, address } = req.body;

    //validations
    if (!name || !phone || !address) {
      return res.status(500).send({
        success: false,
        message: "Please fill all fields",
      });
    }
    const user = await UserModel.findByIdAndUpdate(uid, {}, { new: true });
    res.status(201).send({
      success: true,
      message: "User updated sucessfully!",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error with updating user",
      error,
    });
  }
};
