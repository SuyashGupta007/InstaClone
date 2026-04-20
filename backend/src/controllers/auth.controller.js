const express = require('express'); 
const userModel = require("../model/user.model"); // Import user schema/model
const bcrypt = require("bcryptjs"); // For hashing passwords
const jwt = require("jsonwebtoken"); // For generating JWT tokens

// ================= REGISTER CONTROLLER =================
 exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists with same email
        const existing = await userModel.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password before saving (security best practice)
        const hashed = await bcrypt.hash(password, 10);

        // Create new user in database
        await userModel.create({
            username,
            email,
            password: hashed
        });

        console.log("User Created successfully");
        res.status(201).json({ message: "User registered" });

    } catch (err) {
        console.error("Error in register controller:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
};


// ================= LOGIN CONTROLLER =================
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // Store token in cookie
        // Cross-Site Scripting (XSS) is a vulnerability where attackers inject malicious scripts
        // into web applications, which then run in the user's browser. By using httpOnly cookies,
        // we prevent JavaScript from accessing the token, reducing the risk of token theft via XSS.
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // should be true in production (HTTPS)
        });

        res.status(200).json({ message: "Login successful" });

    } catch (err) {
        console.error("cannot login", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.logout = async(req,res) =>{
    res.clearCookie("token");
    res.status(200).json({message:"logout successfully"})
};

