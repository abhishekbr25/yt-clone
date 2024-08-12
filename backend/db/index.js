import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.mongo);
    console.log("Mongodb connected");
  } catch (error) {
    console.log("database connection failed: \n" + error);
  }
};
