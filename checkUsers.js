import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  const users = await User.find();
  console.log("Users in database:\n", users);
  process.exit();
}

run();
