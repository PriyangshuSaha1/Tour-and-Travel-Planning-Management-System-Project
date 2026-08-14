const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  tourId:          { type: mongoose.Schema.Types.ObjectId, ref: "Tour", required: true },
  tourTitle:       { type: String, required: true },
  userId:          { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name:            { type: String, required: true },
  email:           { type: String, required: true },
  phone:           { type: String, required: true },
  travelers:       { type: Number, required: true, min: 1 },
  date:            { type: String, required: true },
  specialRequest:  { type: String, default: "" },
  customItinerary: { type: [String], default: [] },
  totalPrice:      { type: Number, required: true },
  status:          { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  createdAt:       { type: Date, default: Date.now },
});
module.exports = mongoose.model("Booking", bookingSchema);
