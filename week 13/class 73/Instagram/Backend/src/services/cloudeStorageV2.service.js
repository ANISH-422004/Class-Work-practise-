const ImageKit = require("imagekit");
const config = require("../config/config");

const imagekit = new ImageKit({
    publicKey: config.IMAGEKIT_PUBLIC_KEY,
    privateKey: config.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: config.IMAGEKIT_URL_ENDPOINT,
});

// Function to upload buffer to ImageKit
const uploadFile = async (fileBuffer, fileName) => {
    try {
        const result = await imagekit.upload({
            file: fileBuffer, // Pass the buffer directly
            fileName: fileName, // Assign a name
            folder: "/INSTAGRAM", // Optional folder
        });
        return result; // This will contain the uploaded file URL
    } catch (error) {
        console.error("Error uploading to ImageKit:", error);
        throw new Error("Image upload failed");
    }
};

module.exports = { uploadFile };
