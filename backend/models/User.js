const mongoose = require("mongoose");
//creating schema for user model
const userschema = new mongoose.Schema({

    name : String,
    email: {type:String , unique:true},
    password: String
});
//exporting the model

module.exports = mongoose.model("User", userschema);