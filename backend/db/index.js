import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.ilwbje8.mongodb.net/yt-clone"
    );
    console.log('Mongodb connected');
    
  } catch (error) {
    console.log("database connection failed: \n" + error);
  }
};
