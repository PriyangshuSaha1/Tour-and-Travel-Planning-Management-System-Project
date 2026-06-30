const mongoose = require("mongoose");
//creating schema for tour model
const TourSchema = new mongoose.Schema({

    title: String,
    destination: String,
    description: String,
    price: Number,
    duration: String,
    maxPeople: Number,
    category: String,
    availableSeats: Number
});
//exporting the model

module.exports = mongoose.model("Tour", TourSchema);