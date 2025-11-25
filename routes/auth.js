import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import auth from "../middleware/auth.js";

const router = express.Router();

/* LOGIN */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "8h" });

    res.json({
      token,
      user: {
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* REGISTER (create admin) — protected, only superadmin allowed */
router.post("/register", auth, async (req, res) => {
  try {
    const current = req.user;
    if (!current) return res.status(401).json({ message: "Unauthorized" });
    if (current.role !== "superadmin") return res.status(403).json({ message: "Only superadmin can create admins" });

    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, passwordHash: hash, role: "admin" });

    res.json({ message: "Admin created", user: { email: newUser.email, role: newUser.role } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
