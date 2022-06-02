import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";

// @desc      Register new user
// @route     POST /api/users
// @access    Public
export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check if email is already used
  const userExists = await userModel.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email already used");
  }

  //   Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc      Authenticate a user
// @route     POST /api/users/login
// @access    Public
export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Wrong password or email");
  }
});

// @desc      Get user data
// @route     GET /api/users/me
// @access    Public
export const getMe = expressAsyncHandler(async (req, res) => {
  res.json({ message: "my profile" });
});
