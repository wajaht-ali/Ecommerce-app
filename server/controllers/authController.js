import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) {
      return res.send({ message: "Please add the name." });
    }
    if (!email) {
      return res.send({ message: "Please add the email." });
    }
    if (!password) {
      return res.send({ message: "Please add the password." });
    }
    if (!phone) {
      return res.send({ message: "Please add the phone." });
    }
    if (!address) {
      return res.send({ message: "Please add the address." });
    }
    //existing user
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Registered please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new UserModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(200).send({
      success: true,
      message: "User register succssfully",
      user,
    });
  } catch (error) {
    console.log(`Error with regController ${error}`);
  }
};

//login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //user
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }
    //token
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_Secret, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login sucessfully",
      user: {
        _id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error with login controller",
      error,
    });
  }
};

//update profile
export const updateProfileController = async (req, res) => {
  try {
    // console.log(req);
    const { name, email, password, address, phone } = req.body;
    const user = await UserModel.findById(req.user._id);
    // password validation
    if (password && password.length < 3) {
      return res
        .status(201)
        .send({ message: "Password must be greater than 4 characters!" });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
        address: address || user.address,
        phone: phone || user.phone,
      },
      { new: true }
    );

    res.status(201).send({
      success: true,
      message: "User updated sucessfully!",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error with update profile controller",
      error,
    });
  }
};

// orders
export const ordersController = async (req, res) => {
  try {
    res.send({message: "Order controller."});
  } catch (error) {
    res.status(500).send({
      success: true,
      message: "Error with update profile controller",
      error,
    });
  }
};


//test
export const testController = async (req, res) => {
  res.send("protected route");
};

// export default {registerController}
