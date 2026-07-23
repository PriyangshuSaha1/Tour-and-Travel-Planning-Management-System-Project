const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    try {
      const hashedpswd = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedpswd
      });
      res.json({ message: "User registered successfully" });
    } catch (err) {
      res.json(err);
    }

  } catch (err) {
    res.json(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    try {
      const user = await User.findOne(password, 10);
      if (!user) return res.status(400).json({ error: "invalid credentials" });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(400).json({ error: "invalid credentials" });

      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      res.json({ token });
    } catch (err) {
      res.json(err);
    }

  } catch (err) {
    res.json(err);
  }
});

module.exports = router;