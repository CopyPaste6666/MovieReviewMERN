const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authentication');
require('../db/conn');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

/*router.post('/register',  (req, res) => {
    console.log(req.body);
    res.json({ message: req.body });
    // res.send("mera register page");
    const { name , email , password , cpassword} = req.body;

    if( !name || !email || !password || !cpassword){
        return res.status(422).json({error:"please fill the feild properly"});
    }
    User.findOne({email:email})
    .then((userExist) => {
        if(userExist){
            return res.status(422).json({error:"User Already Exist"});
        }
        const user = new User({ name , email , password , cpassword});

        user.save().then(() => {
            res.status(201).json({message:"User Registered Successfully"});
        }).catch((err) =>  res.status(500).json({error:"Failed to Register"}));
    }).catch(err => { console.log(err);});
});*/
//asyn-await

router.post('/register', async (req, res) => {
    //console.log(req.body);
    //res.json({ message: req.body });
    // res.send("mera register page");

    const { name , email , password , cpassword} = req.body;

    if( !name || !email || !password || !cpassword){
        return res.status(422).json({error:"please fill the feild properly"});
    }
    try{
       const userExist = await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"User Already Exist"});
        }else if(password != cpassword){
            return res.status(422).json({error:"Password Not matching"});
        }else{
            const user = new User({ name , email , password , cpassword});

        await user.save();
        res.status(201).json({message:"User Registered Successfully"});
        }
        
    }catch(err){
        console.log(err);
    }
    
});
router.post('/signin', async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({error: "Plz Filled the data"})
            }
            const userLogin = await User.findOne({email:email});
            //console.log(userLogin);
            if(userLogin){
                const isMatch = await bcrypt.compare(password,userLogin.password);
                const token = await userLogin.generateAuthToken();

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly:true
                    });

                if(!isMatch){
                    res.status(400).json({error: "Invalid Credentials"});
                }
                else{
                    res.json({message: "User Signed In Successfully"});
                }
            }else{
                res.status(400).json({error: "Invalid Credentials"});
            }
    
        
            
            
        }catch (err) {
            console.log(err);
            res.status(500).json({error: err.message});
        }
});

// logout

router.get('/logout',(req, res) => {
    console.log(`Hello my Logout Page`);
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('User lOgout');
});


module.exports = router;