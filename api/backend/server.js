import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import goalRoutes from "./routes/goalRoutes.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";
dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(port, () => {
  connectDB();
  console.log(`Server started on port ${port}`);
});
