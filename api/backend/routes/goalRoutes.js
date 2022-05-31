const express = require("express");
const router = express.Router();
const { getGoals } = require("../controllers/goalController");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

router.post("/", getGoals);

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = router;
