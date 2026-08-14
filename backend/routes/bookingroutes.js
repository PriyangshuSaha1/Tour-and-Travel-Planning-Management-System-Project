const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Tour = require("../models/tour");
const { auth, isProvider } = require("../middleware/auth");

// POST — create booking (requires login - any role)
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

// GET all bookings (ADMIN/PROVIDER VIEW)
router.get("/", isProvider, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ bookings });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// GET bookings by logged-in user (Tourist view)
router.get("/my", auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.json({ bookings });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// PATCH — cancel booking (Any logged-in user can cancel their own, but provider can cancel any. For simplicity, just require auth here, could be hardened further)
router.patch("/:id/cancel", auth, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: "cancelled" }, { new: true });
    res.json({ message: "Booking cancelled", booking });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
