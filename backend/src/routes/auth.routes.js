const express = require('express'); // Import Express framework

// Import controller functions for authentication
const { register, login,logout } = require('../controllers/auth.controller');

// Create a router instance
const router = express.Router();

// ================= AUTH ROUTES =================

// Route for user registration
// Handles POST request → /register
// Calls register controller to create a new user
router.post("/register", register);

// Route for user login
// Handles POST request → /login
// Calls login controller to authenticate user and generate token
router.post("/login", login);

router.post("/logout",logout);

// Export router to use in main server file (e.g., app.js/server.js)
module.exports = router;