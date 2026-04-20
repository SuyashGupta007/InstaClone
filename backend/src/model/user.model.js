const mongoose = require("mongoose"); // Import mongoose for schema and model creation

// Define schema for User collection
const userSchema = new mongoose.Schema({
    // Username of the user (no validation added yet)
    username: String,

    // Email field (must be unique and required)
    email: {
        type: String,
        unique: true,   // Ensures no duplicate emails in DB
        required: true  // Email is mandatory
    },

    // Password field (stored as hashed value)
    password: {
        type: String,
        required: true  // Password is mandatory
    }
});

// Create model from schema (collection name will be 'users')
const user = mongoose.model("User", userSchema);

// Export model to use in controllers
module.exports = user;