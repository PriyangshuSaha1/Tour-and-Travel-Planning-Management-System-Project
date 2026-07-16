//for dynamic routing express is only used.
//Express used for dynamic routing and for creating server
const express = require("express");
//define/declare routing
const router = express.Router();
const Tour = require("../models/tour");


//add tour details
router.post('/',async (req,res)=>{
    try{
        const tour = await Tour.create({
            title:req.body.title,   
            description:req.body.description,
            price:req.body.price
        });
        res.status(201).json(tour);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//view all tour details
router.get('/', async (req,res)=>{
    const tours = await Tour.find();
    res.json({message:"All tours fetched successfully", tours});
});

//view single tour details
router.get('/:id', async (req,res)=>{
    const tours = await Tour.findById(req.params.id);
    res.json({message:"Tour fetched successfully", tours});
});

//update tour details
router.put('/:id', async (req,res)=>{
    const tours = await Tour.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json({message:"Tour updated successfully", tours});
});

//delete tour details
router.delete('/:id', async (req,res)=>{
    const tours = await Tour.findByIdAndDelete(req.params.id);
    res.json({message:"Tour deleted successfully", tours});
});

module.exports = router;