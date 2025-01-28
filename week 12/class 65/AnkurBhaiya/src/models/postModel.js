const mongoose =  require("mongoose")

const postSchema = new mongoose.Schema({

    image: {
        type: String,
        required: true
    },
    caption:{
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },


})

const postsModel =  mongoose.model("Posts", postSchema)

module.exports = postsModel
