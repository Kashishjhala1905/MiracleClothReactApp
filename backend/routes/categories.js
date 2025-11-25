import express from "express";
import Category from "../models/Category.js";
import auth from "../backend/middleware/auth.js";
import slugify from "slugify";

const router = express.Router();

// GET /api/categories
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find().sort({ name: 1 });
    res.json(cats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/categories (protected)
router.post("/", auth, async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const { name, description } = req.body;
    if (!name) return res.status(400).json({ message: "Name required" });

    const slug = slugify(name, { lower: true, strict: true });
    const exists = await Category.findOne({ slug });
    if (exists) return res.status(400).json({ message: "Category already exists" });

    const cat = await Category.create({ name, slug, description });
    res.status(201).json(cat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/categories/:id (protected)
router.delete("/:id", auth, async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const cat = await Category.findById(req.params.id);
    if (!cat) return res.status(404).json({ message: "Not found" });

    await Category.deleteOne({ _id: cat._id });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
