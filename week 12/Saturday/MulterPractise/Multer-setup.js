const multer = require('multer');
const path = require('path');

// Set storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Destination folder for uploaded files
        cb(null, './public/images/uploads');
    },
    filename: function (req, file, cb) {
        // Creating a unique filename using current timestamp and random number
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // Ensure file extension is retained using the correct property (originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// Initialize multer with the defined storage engine
const upload = multer({ storage: storage });

module.exports = upload;
