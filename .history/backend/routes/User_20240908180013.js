const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User } = require("../modals/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
    const { name, phone, email, password,age } = req.body;

    try {
        // Check if the user already exists
        let existingUser = await User.findOne({ email:email });
        let existingUserBuPh = await User.findOne({ phone: phone });
        if (existingUser || existingUserBuPh) {
            return res.status(400).json({ msg: "User already exists!" });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database
        const user = new User({
            name,
            phone,
            email,
            password: hashPassword,
            age
        });

        const result = await user.save();

        // Generate a JWT token
        const token = jwt.sign(
            { email: result.email, id: result._id },
            process.env.JSON_WEB_TOKEN_SECRET_KEY,
            { expiresIn: '1h' } // Token expiration time can be customized
        );

        // Return the user data and token
        return res.status(201).json({
            user: {
                id: result._id,
                name: result.name,
                email: result.email,
                phone: result.phone,
                age: result.age,
            },
            token
        });
    } catch (error) {
        console.error("Signup Error:", error.message);
        res.status(500).json({ msg: "Something went wrong" });
    }
});

router.post("/signin", async (req, res) => {
    const {  email, password } = req.body;

    try {
        let existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return res.status(400).json({ msg: "User not exists!" }); 
        }

        const matchPassword = await bcrypt.compare(password,existingUser.password)
        if(!matchPassword){
            return res.status(400).json({ msg: "Invalid Credentials" }); 
        }

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            process.env.JSON_WEB_TOKEN_SECRET_KEY
        );

        res.status(200).json({
            user: existingUser,
            token: token,
            msg:"User Auntheicated"
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: "Something went wrong" });
    }
});

router.get("/",async (req,res) => {
    const userList = await User.find();

    if(!userList){
        res.status(500).json({success: false})
    }
    res.send(userList);
})

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: "The User With Given Id Does Not Exist" });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).json({ msg: "Server Error", error: error.message });
    }
});


router.delete("/:id",async (req,res) => {
   User.findbyIdAndDelete(req.params.id).then(user => {
    if(user){
        return res.status(200).json({msg:"The User Is Deleted",success: true})
    }else{
        return res.status(404).json({msg:"User Not Found",success: false})
    }
   }).catch(err => {
    return res.status(500).json({success: true,error: err})
   })
})

router.put('/:id', async(req,res) => {
    const {name,phone,email,password} = req.body;
    try{
        const userExist = await User.findById(req.params.id);
        let newPassword 

        if(req.body.password) {
            newPassword = bcrypt.hash(req.body.password,10);
        } else {
            newPassword = userExist.passwordHash;
        }
        const user = await User.findByIdAndUpdate(
         req.params.id,
         {
            name:name,
            phone:phone,
            email:email,
            password:newPassword
         },
         {new:true}
        )
        if(!user){
            return res.status(400).send('The User Cannot Be Updated')
        }

        res.send(usre)
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: "Something went wrong" });
    }
})

module.exports = router; 
