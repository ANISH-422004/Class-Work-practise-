const postModel = require("../models/posts.model");
const UserModel = require("../models/user.model");
const { uploadFile } = require("../services/cloudeStorageV2.service");

module.exports.createPostController = async (req, res) => {
    try {
        const userId = req.user._id;
        console.log(userId)
        // Ensure media file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: "Media file is required" });
        }

        const fileBuffer = req.file.buffer;
        const fileName = req.file.originalname;
        const uploadedMedia = await uploadFile(fileBuffer, fileName);


        if (!uploadedMedia?.url) {
            return res.status(500).json({ message: "Failed to upload media" });
        }

        // Get caption from request
        const { caption } = req.body;
        if (!caption) {
            return res.status(400).json({ message: "Caption required" });
        }

        // // Create post with Cloudinary URL
        const newPost = await postModel.create({
            media: uploadedMedia.url,
            caption,
            userId,
        });

        // Update user's post list
        await UserModel.findByIdAndUpdate(userId, {
            $push: { posts: newPost._id },
        });

        res.status(201).json({ message: "Post Created", newPost });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
