const mongoose = require("mongoose");
//creating schema for user model
const userschema = new mongoose.Schema({

    name : String,
    email: {type:String , unique:true},
    password: String,
    role: { type: String, enum: ['tourist', 'provider'], default: 'tourist' }
});
//exporting the model

module.exports = mongoose.model("User", userschema);