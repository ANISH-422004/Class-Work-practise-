const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage(); // Store in memory as Buffer

const fileFilter = (req, file, cb) => {
    const extensions = ['.jpg', '.png', '.webp']; // Allowed extensions
    let fileExt = path.extname(file.originalname).toLowerCase(); // Get extension

    if (extensions.includes(fileExt)) {
        cb(null, true); // Accept file
    } else {
        cb(new Error('Only JPG, PNG, and WEBP images are allowed!'), false); // Reject file
    }
};

// Initialize multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;
