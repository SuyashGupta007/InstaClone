// Import JWT library
const jwt = require('jsonwebtoken');

// Middleware to protect routes (Authentication)
module.exports = (req, res, next) => {
    try {
        // Extract token from cookies
        const token = req.cookies?.token;

        // If token is not present → Unauthorized
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized - No token provided"
            });
        }

        // Verify token using secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach userId to request object (used in controllers)
        req.userId = decoded.id;

        // Move to next middleware/controller
        next();

    } catch (err) {
        // Token invalid or expired
        console.error("JWT Error:", err.message);

        return res.status(401).json({
            message: "Unauthorized - Invalid or expired token"
        });
    }
};