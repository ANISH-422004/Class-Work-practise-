const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    image: String,
})

const userModel = mongoose.model('user',userSchema)


