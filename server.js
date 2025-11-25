import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import uploadRoutes from "./routes/upload.js";
import categoriesRoutes from "./routes/categories.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// serve uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/categories", categoriesRoutes);


app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174", "*"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// health
app.get("/", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.log("Mongo Error:", err));

 app.listen(process.env.PORT || 5000, "0.0.0.0", () => {
  console.log("Server running on http://0.0.0.0:5000");
});

/*
mongodb+srv://kashishjhala05:<db_password>@cluster0.ncykhx4.mongodb.net/?appName=Cluster0 */
