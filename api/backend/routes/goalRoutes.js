import express from "express";
const router = express.Router();
import getGoals from "../controllers/goalController.js";

router.get("/", getGoals);

router.post("/", (req, res) => {
  res.status(200).json({ message: `set goal` });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

export default router;
