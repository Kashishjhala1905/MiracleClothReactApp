import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // stores category name
  price: { type: String, required: true },
  img: { type: String },
  desc: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Product", productSchema);
