const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage,
    limits:{
        fileSize: 1024 * 1024 * 5 ,// 5MB
    }
 })


module.exports.handelFileUpload = upload.single('media')