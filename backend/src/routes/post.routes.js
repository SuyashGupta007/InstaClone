// Import required modules
const express = require("express");
const router = express.Router();
const multer = require("multer");

// Import custom middleware and controller
const authMiddleware = require("../middleware/auth.middleware");
const { createPost } = require("../controllers/post.controller");

// Configure multer to store files in memory (buffer)
// Useful when uploading directly to cloud services (Cloudinary, S3, etc.)
const upload = multer({
    storage: multer.memoryStorage(),
});

// Route: Create a new post
router.post(
    "/create-post",

    authMiddleware, 
    // Middleware to verify user authentication
    // Attaches userId to req (used in controller)

    upload.single("image"), 
    // Multer middleware to handle single file upload
    // Expects field name "image" in form-data
    // Stores file in req.file

    createPost 
    // Controller function to handle post creation logic
);

module.exports = router; // Export router to use in main app