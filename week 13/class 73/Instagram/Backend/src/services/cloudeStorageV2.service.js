const ImageKit = require("imagekit");
const { Readable } = require("stream");
const config = require("../config/config");
const mongoose = require("mongoose");
const imagekit = new ImageKit({
    publicKey: config.IMAGEKIT_PUBLIC_KEY,
    privateKey: config.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: config.IMAGEKIT_URL_ENDPOINT,
});

// Function to convert buffer to stream and upload
const uploadBufferStream = async (fileBuffer, fileName) => {
    try {


        const result = await imagekit.upload({
            file: Readable.from(fileBuffer), // Convert buffer to stream
            fileName:new mongoose.Types.ObjectId(), // Unique file name
            isPublished: true,
            isPrivateFile: false,
            folder: "/INSTAGRAM",
        });

        return result; // Return uploaded file details
    } catch (error) {
        console.error("Error uploading to ImageKit:", error);
        throw new Error("Image upload failed");
    }
};

module.exports = { uploadBufferStream };
