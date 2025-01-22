const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: {type:String}

})

const userModel = mongoose.model("user(_Project_)",userSchema)


module.exports=userModel