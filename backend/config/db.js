const mongoose = require("mongoose");
const connectdb = async() =>{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb connected");
}

module.exports = connectdb;