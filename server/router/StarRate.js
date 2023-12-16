/*const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
require('../db/conn');

const SRating = require ('../models/ratingSchema');
const Authenticate = require('../middleware/authentication');

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});



router.post('/details', Authenticate ,async (req, res) => {
    //console.log(req.body);
    //res.json({ message: req.body });
    // res.send("mera register page");

    const { objid,name,email , rating ,comment} = req.body;

    if( !rating || !comment){
        return res.status(422).json({error:"please fill the feild properly"});
    }
    else if(!Authenticate){
        return res.status(401).json({error:"User UnAuthenticated"});
    }
    try{
       const userExist = await SRating.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"User Can review Only One Time"});
        }else{
            const rate = new SRating({ objid,name , email , rating , comment});

        await rate.save();
        res.status(201).json({message:"Rating Uploaded successfully"});
        }
        
    }catch(err){
        console.log(err);
    }
    
});
module.exports=router;