import expressAsyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";

// @desc      Register new user
// @route     POST /api/users
// @access    Public
export const registerUser = (req, res) => {
  res.json({ message: "User registered" });
};

// @desc      Authenticate a user
// @route     POST /api/users/login
// @access    Public
export const loginUser = (req, res) => {
  res.json({ message: "User logged in" });
};

// @desc      Get user data
// @route     GET /api/users/me
// @access    Public
export const getMe = (req, res) => {
  res.json({ message: "my profile" });
};
