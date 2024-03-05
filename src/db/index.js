import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MongoDB connected at host ${conn.connection.host}`);
  } catch (error) {
    console.log("DB Connection Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
