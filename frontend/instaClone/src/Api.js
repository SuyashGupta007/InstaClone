import axios from "axios"

// Create a reusable Axios instance for API calls
const API = axios.create({
    
    // Base URL for all API requests
    // Every request will be prefixed with this URL
    // Example: API.get("/auth") → http://localhost:3000/auth
    baseURL: "http://localhost:3000",

    // Allows sending cookies (for authentication, sessions, etc.)
    // Useful when backend uses cookies instead of tokens
    withCredentials: true
});

// Exporting the API instance to use across the app
export default API;