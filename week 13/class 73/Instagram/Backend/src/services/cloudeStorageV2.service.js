const ImageKit = require("imagekit");
const { PassThrough } = require("stream");
const config = require("../config/config");

const imagekit = new ImageKit({
    publicKey: config.IMAGEKIT_PUBLIC_KEY,
    privateKey: config.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: config.IMAGEKIT_URL_ENDPOINT,
});

// Function to convert buffer to stream and upload
const uploadBufferStream = async (fileBuffer, fileName) => {
    try {
        const passThroughStream = new PassThrough();
        passThroughStream.end(fileBuffer); // Convert buffer to a readable stream

        const result = await imagekit.upload({
            file: passThroughStream, // Pass the readable stream
            fileName: fileName,
            folder: "/INSTAGRAM",
        });

        return result; // Return uploaded file details
    } catch (error) {
        console.error("Error uploading to ImageKit:", error);
        throw new Error("Image upload failed");
    }
};

module.exports = { uploadBufferStream };
