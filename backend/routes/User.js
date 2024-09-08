const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User } = require("../modals/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup route
router.post("/signup", async (req, res) => {
    const { name, phone, email, password, age } = req.body;

    try {
        // Check if the user already exists
        let existingUser = await User.findOne({ email });
        let existingUserByPhone = await User.findOne({ phone });

        if (existingUser || existingUserByPhone) {
            return res.status(400).json({ msg: "User already exists!" });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({
            name,
            phone,
            email,
            password: hashPassword,
            age
        });

        const result = await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { email: result.email, id: result._id },
            process.env.JSON_WEB_TOKEN_SECRET_KEY,
            { expiresIn: '1h' }
        );

        // Return user data and token
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

// Signin route
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ msg: "User does not exist!" });
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
            return res.status(400).json({ msg: "Invalid credentials!" });
        }

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            process.env.JSON_WEB_TOKEN_SECRET_KEY
        );

        return res.status(200).json({
            user: existingUser,
            token,
            msg: "User authenticated"
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ msg: "Something went wrong" });
    }
});

// Get all users
router.get("/", async (req, res) => {
    try {
        const userList = await User.find();
        if (!userList) {
            return res.status(500).json({ success: false });
        }
        return res.status(200).send(userList);
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error: error.message });
    }
});

// Get a single user by ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: "The User with the given ID does not exist" });
        }
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error: error.message });
    }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (user) {
            return res.status(200).json({ msg: "The user is deleted", success: true });
        } else {
            return res.status(404).json({ msg: "User not found", success: false });
        }
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

// Update a user by ID
router.put("/:id", async (req, res) => {
    const { name, phone, email, password } = req.body;

    try {
        const userExist = await User.findById(req.params.id);
        let newPassword;

        if (password) {
            newPassword = await bcrypt.hash(password, 10); // Missing await added
        } else {
            newPassword = userExist.password; // Corrected to keep the existing password
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                name,
                phone,
                email,
                password: newPassword
            },
            { new: true }
        );

        if (!user) {
            return res.status(400).send("The user cannot be updated");
        }

        return res.status(200).send(user);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ msg: "Something went wrong" });
    }
});

module.exports = router;
