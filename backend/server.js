// Load environment variables from .env file into process.env
const dotenv = require("dotenv").config();

const app = require("./src/app"); // Import Express app
const connectDB = require("./src/db/db"); // Import DB connection function

// ================= DATABASE CONNECTION =================

// Connect to MongoDB before starting the server
connectDB();

// ================= START SERVER =================

// Start server on port defined in environment variables
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});