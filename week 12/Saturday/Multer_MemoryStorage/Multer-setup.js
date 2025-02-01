const multer = require('multer');
const path = require('path');


    



// Initialize multer with the defined storage engine
const upload = multer({ storage: storage });

module.exports = upload;
