import expressAsyncHandler from "express-async-handler";
import goalModel from "../models/goalModel.js";

// @desc      Get goals
// @route     GET /api/goals
// @access    Private
export const getGoals = expressAsyncHandler(async (req, res) => {
  const goals = await goalModel.find();

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

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});
