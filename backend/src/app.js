const express = require("express"); // Import Express framework
const authRoutes = require("./routes/auth.routes"); // Import authentication routes
const postRoutes = require("./routes/post.routes"); // Import post-related routes
const cookieParser = require("cookie-parser"); // Middleware to parse cookies
const cors = require("cors"); // Middleware to enable CORS (Cross-Origin Resource Sharing)
const app = express(); // Create Express app instance

// ================= MIDDLEWARE =================

// Parse incoming JSON requests (req.body)
app.use(express.json());

// Parse cookies from incoming requests (req.cookies)
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173", // Allow requests from this origin (frontend)
    credentials: true // Allow cookies to be sent with requests
}))

// ================= ROUTES =================

// All auth-related routes will be prefixed with /auth
// Example: /auth/register, /auth/login
app.use("/auth", authRoutes);
app.use("/posts", postRoutes); // All post-related routes will be prefixed with /posts

// Export app to use in server file (e.g., index.js/server.js)
module.exports = app;