//for dynamic routing express is only used.
//Express used for dynamic routing and for creating server
const express = require("express");
//define/declare routing
const router = express.Router();
const Tour = require("../models/tour");


//add tour details
router.post('/', async (req,res)=>{
    const tour = await Tour.create(req.body);
    res.json({message:"Tour added successfully", tour});
});

//view all tour details
router.get('/', async (req,res)=>{
    const tours = await Tour.find();
    res.json({message:"All tours fetched successfully", tours});
});

//view single tour details
router.get('/:id', async (req,res)=>{
    const tour = await Tour.findById(req.params.id);
    res.json({message:"Tour fetched successfully", tour});
});

//update tour details
router.put('/:id', async (req,res)=>{
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json({message:"Tour updated successfully", tour});
});

//delete tour details
router.delete('/:id', async (req,res)=>{
    const tour = await Tour.findByIdAndDelete(req.params.id);
    res.json({message:"Tour deleted successfully", tour});
});