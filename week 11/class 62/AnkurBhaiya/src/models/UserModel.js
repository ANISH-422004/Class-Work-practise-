const mongoose =  require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: true
    }

})

const userModel =  mongoose.model("User", UserSchema)

module.exports = userModel
