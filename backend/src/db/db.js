const mongoose = require("mongoose"); // Import mongoose for MongoDB connection

// Function to establish connection with MongoDB
async function connectDB() {
    try {
        // Connect to MongoDB using URI from environment variables
        await mongoose.connect(process.env.MONGO_URI);

        // Log success message if connection is established
        console.log("MongoDB connected successfully");
    } catch (err) {
        // Handle connection errors
        console.error(err.message);

        // Optional: Exit process if DB connection fails (useful in production)
        // process.exit(1);
    }
}

// Export the function to use it in server.js or app.js
module.exports = connectDB;