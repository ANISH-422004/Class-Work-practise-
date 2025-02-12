const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    media:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
})


const postModel = mongoose.model("posts",postSchema)

module.exports =postModel