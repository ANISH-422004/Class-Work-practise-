const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    media: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] // Array to store users who liked the post
});

const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
