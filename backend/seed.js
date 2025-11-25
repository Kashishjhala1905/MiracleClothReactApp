import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import User from "./models/User.js";
import Product from "./models/Product.js";
import Category from "./models/Category.js";
import slugify from "slugify";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("MONGO_URI missing in .env");
  process.exit(1);
}

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Mongo connected.");

    // create uploads folder
    const uploadsDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

    // create superadmin
    const adminEmail = "admin@miracle.com";
    const adminPassword = "Password123";
    let admin = await User.findOne({ email: adminEmail });
    if (!admin) {
      const hash = await bcrypt.hash(adminPassword, 10);
      admin = await User.create({ email: adminEmail, passwordHash: hash, role: "superadmin" });
      console.log("Superadmin created:", adminEmail);
    } else {
      console.log("Admin already exists:", adminEmail);
    }

    // create default categories
    const defaultCategories = ["Exclusive Custom Dresses", "Heavy Dress", "Winter Collection"];
    for (const name of defaultCategories) {
      const slug = slugify(name, { lower: true, strict: true });
      const exists = await Category.findOne({ slug });
      if (!exists) {
        await Category.create({ name, slug, description: `${name} collection` });
        console.log("Category created:", name);
      }
    }

    // create sample product if none
    const count = await Product.countDocuments();
    if (count === 0) {
      // prefer project public image if exists
      const publicImg = path.join(__dirname, "public", "images", "miracle.jpg");
      const target = path.join(uploadsDir, "miracle.jpg");

      if (fs.existsSync(publicImg)) {
        fs.copyFileSync(publicImg, target);
        console.log("Copied public image to uploads/miracle.jpg");
      } else {
        console.log("Public image not found (public/images/miracle.jpg). Skipping copy.");
      }

      await Product.create({
        title: "Miracle Signature Dress",
        category: "Exclusive Custom Dresses",
        price: "$420",
        img: fs.existsSync(target) ? "/uploads/miracle.jpg" : "/images/miracle.jpg",
        desc: "Signature handcrafted dress from Miracle boutique."
      });

      console.log("Sample product created.");
    } else {
      console.log("Products already exist.");
    }

    console.log("Seeding completed.");
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

run();
