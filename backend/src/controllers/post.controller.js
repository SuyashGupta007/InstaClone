// Import required modules
const express = require('express');
const postModel = require('../model/post.model');
const userModel = require("../model/user.model");
const uploadFile = require("../services/storage.service"); // fixed typo (stroage -> storage)

// Controller to create a new post
exports.createPost = async (req, res) => {
    try {
        // Check if image file is provided
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        // Upload image buffer to storage service (e.g., Cloudinary, S3)
        const result = await uploadFile(req.file.buffer);

        // Create a new post document in DB
        const post = await postModel.create({
            image: result.url,           // URL returned from storage service
            caption: req.body.caption,  // Caption from request body
            owner: req.userId           // User ID from auth middleware
        });

        // Add post reference to user's posts array
        await userModel.findByIdAndUpdate(
            req.userId,
            { $push: { posts: post._id } },
           // { new: true } // optional: returns updated document
        );

        // Send success response
        res.status(201).json({
            message: "Post created successfully",
            post
        });

    } catch (err) {
        // Log error for debugging
        console.error(err.message);

        // Send generic server error response
        res.status(500).json({
            message: "Internal server error"
        });
    }
};