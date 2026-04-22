// Import ImageKit SDK
const ImageKit = require('@imagekit/nodejs');

// Initialize ImageKit instance with credentials from environment variables
const imagekit = new ImageKit({
    publicKey: process.env.PUBLIC_KEY,     // Public API key
    privateKey: process.env.PRIVATE_KEY,   // Private API key
    urlEndpoint: process.env.URL_ENDPOINT  // URL endpoint for accessing files
});

// Function to upload file to ImageKit
async function uploadFile(buffer) {
    try {
        // Convert buffer to base64 (required by ImageKit)
        const base64File = buffer.toString("base64");

        // Upload file to ImageKit
        const result = await imagekit.upload({
            file: base64File,                          // File in base64 format
            fileName: `${Date.now()}.jpg`,             // Unique filename using timestamp
            // useUniqueFileName: true,                // Optional: let ImageKit auto-generate unique name
            // folder: "/posts",                       // Optional: store inside folder
        });

        return result; // Contains URL, fileId, etc.

    } catch (error) {
        // Log error for debugging
        console.error("Image upload failed:", error.message);

        // Throw error to handle it in controller
        throw new Error("Image upload failed");
    }
}

// Export upload function
module.exports = uploadFile;