import express from "express";
import { PORT } from "./constants.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Project Backend API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});