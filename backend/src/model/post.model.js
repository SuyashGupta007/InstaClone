// Importing mongoose package
const mongoose = require("mongoose");

// Creating schema for Post collection
const postSchema = new mongoose.Schema({

    // Stores image URL or image path
    image: String,

    // Stores post caption text
    caption: String,

    // Reference to the user who created the post
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

})

// Creating Post model from schema
const post = mongoose.model("Post", postSchema);

// Exporting Post model
module.exports = post;