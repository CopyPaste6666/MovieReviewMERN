
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authentication');
require('../db/conn');
const User = require('../models/userSchema');
const SRating = require ('../models/ratingSchema');

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
//register
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
//sign in
router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({error:"Plz Filled the data"})
        }

        const userLogin = await User.findOne({ email: email });

        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

           

        if (!isMatch) {
            res.status(400).json({ error: "Invalid Credientials " });
        } else {
             // need to genereate the token and stored cookie after the password match 
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true,
                sameSite: 'none',
                secure : true
            });
            
            res.json({ message: "user Signin Successfully" });
        }
        } else {
             res.status(400).json({ error: "Invalid Credientials " });
        }

    } catch (err) {
        console.log(err);
    }
});


//getdata
router.get('/getdata', authenticate, (req, res) => {
    console.log(`Hello my About`);
    res.send(req.rootUser);
});

//star&rating
router.post('/details', authenticate ,async (req, res) => {
    //console.log(req.body);
    //res.json({ message: req.body });
    // res.send("mera register page");

    const { objid,name,email , rating ,comment} = req.body;

    if( !rating || !comment){
        return res.status(422).json({error:"please fill the feild properly"});
    }
    else if(!authenticate){
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



// logout

router.get('/logout', (req, res) => {
    try {
        console.log('Hello my Logout Page');
        res.clearCookie('jwtoken', { path: '/' });
        res.status(200).send('User logout');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router;