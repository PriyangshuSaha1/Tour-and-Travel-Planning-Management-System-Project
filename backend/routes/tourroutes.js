const express = require("express");
const router = express.Router();
const Tour = require("../models/tour");
const { auth, isProvider } = require("../middleware/auth");

// PUBLIC
router.get("/", async (req, res) => {
  try {
    const tours = await Tour.find().sort({ createdAt: -1 });
    res.json({ message: "All tours fetched successfully", tours });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.get("/:id", async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    res.json({ message: "Tour fetched successfully", tour });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// PROTECTED (PROVIDERS ONLY)
router.post("/", isProvider, async (req, res) => {
  try {
    const tour = await Tour.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image
    });
    res.status(201).json(tour);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.put("/:id", isProvider, async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    res.json({ message: "Tour updated successfully", tour });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.delete("/:id", isProvider, async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    res.json({ message: "Tour deleted successfully" });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
