import mongoose from "mongoose";
import { app } from "./app.js";
import { DB_NAME, PORT } from "./constants.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\nMongoDB connected! Host: ${conn.connection.host}`);

    app.on("error", (error) => {
      console.error("Express app error:", error);
      throw error;
    });

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection FAILED:", error.message);
    process.exit(1);
  }
};

connectDB();