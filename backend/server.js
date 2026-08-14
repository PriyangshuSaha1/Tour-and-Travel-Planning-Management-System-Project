const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const tourroutes = require("./routes/tourroutes");
const userroutes = require("./routes/userroutes");
const bookingroutes = require("./routes/bookingroutes");

//call .env file first
dotenv.config();
//call express for server
const app  = express();

//for translating json file to js object.
app.use(express.json());

connectdb();

//for calling cors
//middleware used for request and response cycle handling called buildin middleware
app.use(cors());
app.use("/api/tours",tourroutes);

app.use("/api/auth",userroutes);
app.use("/api/bookings", bookingroutes);
app.get('/',(req,res)=>{
    res.send("API is working");
});

const port = process.env.PORT || 5600;

app.listen(port,()=>{
    console.log("Server is running on 5600");
});