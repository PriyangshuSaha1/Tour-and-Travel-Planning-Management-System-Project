const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectdb = require("./config/db");


//call .env file first
dotenv.config();
//call express for server
const app  = express();

connectdb();

//for calling cors
//middleware used for request and response cycle handling called buildin middleware
app.use(cors());

app.get('/',(req,res)=>{
    res.send("API is working");
});

const port = process.env.PORT || 5600;

app.listen(port,()=>{
    console.log("Server is running on 5600");
})