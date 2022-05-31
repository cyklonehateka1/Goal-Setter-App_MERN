import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes.js";
dotenv.config();
const port = process.env.PORT;
const app = express();

app.use("/api/goals", goalRoutes);

// app.use("/api/goals", goalRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
