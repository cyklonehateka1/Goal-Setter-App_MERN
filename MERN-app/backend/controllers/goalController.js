import expressAsyncHandler from "express-async-handler";
import goalModel from "../models/goalModel.js";
import userModel from "../models/userModel.js";

// @desc      Get goals
// @route     GET /api/goals
// @access    Private
export const getGoals = expressAsyncHandler(async (req, res) => {
  const goals = await goalModel.find({ user: req.user.id });

  res.status(200).json(goals);
});

// @desc      Set goal
// @route     POST /api/goals
// @access    Private
export const setGoal = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("yi wo dross");
  }

  const goal = await goalModel.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

// @desc      Update goal
// @route     PUT /api/goals/:id
// @access    Private
export const updateGoal = expressAsyncHandler(async (req, res) => {
  const goal = await goalModel.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the goal updator matches the logged in user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updatedGoal = await goalModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedGoal);
});

// @desc      Delete goal
// @route     DELETE /api/goals/:id
// @access    Private
export const deleteGoal = expressAsyncHandler(async (req, res) => {
  const goal = await goalModel.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the goal updator matches the logged in user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});
