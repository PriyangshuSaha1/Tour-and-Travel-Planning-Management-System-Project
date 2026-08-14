const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Tour = require("../models/tour");
const auth = require("../middleware/auth");

// POST — create booking (requires login)
router.post("/", auth, async (req, res) => {
  try {
    const { tourId, name, email, phone, travelers, date, specialRequest, customItinerary } = req.body;
    const tour = await Tour.findById(tourId);
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    const totalPrice = tour.price * travelers;
    const booking = await Booking.create({
      tourId, tourTitle: tour.title,
      userId: req.user.userId,
      name, email, phone, travelers, date,
      specialRequest, customItinerary: customItinerary || [],
      totalPrice,
    });
    res.status(201).json({ message: "Booking confirmed!", booking });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// GET all bookings (admin view)
router.get("/", auth, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ bookings });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// GET bookings by logged-in user
router.get("/my", auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.json({ bookings });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// GET bookings by email
router.get("/user/:email", auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ email: req.params.email }).sort({ createdAt: -1 });
    res.json({ bookings });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// PATCH — cancel booking
router.patch("/:id/cancel", auth, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: "cancelled" }, { new: true });
    res.json({ message: "Booking cancelled", booking });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
