const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    image: Buffer,
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel
