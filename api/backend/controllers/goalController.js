// @desc      Get goals
// @route     GET /api/goals
// @access    Private
export const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals through controller" });
};

// @desc      Set goal
// @route     POST /api/goals
// @access    Private
export const setGoal = (req, res) => {
  res.status(200).json({ message: "This is my freaking goal" });
};
// @desc      Update goal
// @route     PUT /api/goals/:id
// @access    Private
export const updateGoal = (req, res) => {
  res.status(200).json({ message: `This is my body count: ${req.params.id}` });
};
// @desc      Delete goal
// @route     DELETE /api/goals/:id
// @access    Private
export const deleteGoal = (req, res) => {
  res
    .status(200)
    .json({ message: `I don't know what to type ooo ${req.params.id}` });
};
