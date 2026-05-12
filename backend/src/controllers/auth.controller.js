const express = require('express');

// Importing User Model (MongoDB Schema)
const userModel = require("../model/user.model");

// bcrypt is used for hashing passwords
const bcrypt = require("bcryptjs");

// jsonwebtoken is used for creating JWT tokens
const jwt = require("jsonwebtoken");


// ================= REGISTER CONTROLLER =================
exports.register = async (req, res) => {

    try {

        // Extracting user data from request body
        const { username, email, password } = req.body;

        // Checking if user already exists with same email
        const existing = await userModel.findOne({ email });

        if (existing) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hashing password before storing in database
        // 10 = salt rounds
        const hashed = await bcrypt.hash(password, 10);

        // Creating new user
        await userModel.create({
            username,
            email,
            password: hashed
        });

        console.log("User Created successfully");

        // Success response
        res.status(201).json({
            message: "User registered"
        });

    } catch (err) {

        // Error handling
        console.error("Error in register controller:", err.message);

        res.status(500).json({
            message: "Internal server error"
        });
    }
};


// ================= LOGIN CONTROLLER =================
exports.login = async (req, res) => {

    try {

        // Getting login data from frontend
        const { email, password } = req.body;

        // Finding user by email
        const user = await userModel.findOne({ email });

        // If user not found
        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // Comparing entered password with hashed password
        const match = await bcrypt.compare(password, user.password);

        // If password does not match
        if (!match) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // Generating JWT token
        const token = jwt.sign(

            // Payload
            { id: user._id },

            // Secret Key
            process.env.JWT_SECRET,

            // Token Expiry
            { expiresIn: "7d" }
        );

        // Storing token inside cookies
        res.cookie("token", token, {

            // Prevents JavaScript access to cookie
            httpOnly: true,

            // Use true in production with HTTPS
            secure: false,
        });

        // Success response
        res.status(200).json({
            message: "Login successful"
        });

    } catch (err) {

        // Error handling
        console.error("cannot login", err.message);

        res.status(500).json({
            message: "Internal server error"
        });
    }
};


// ================= LOGOUT CONTROLLER =================
exports.logout = async (req, res) => {

    // Removing token cookie
    res.clearCookie("token");

    // Success response
    res.status(200).json({
        message: "logout successfully"
    });
};