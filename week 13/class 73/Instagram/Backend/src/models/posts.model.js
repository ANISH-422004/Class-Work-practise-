const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    media: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] // Array to store users who liked the post
});

postSchema.statics.getAlluserData  = async function (id) {
    if(!id){
        throw new Error("Id is required")
    }
    const posts  = await this.find({userId:id})
    return posts
}

postSchema.method.updateCaption = async function (caption) {
    this.caption = caption
    await this.save()
    
    return this
}

postSchema.statics.getRecentPosts = async function (limit) {
    if(!limit){
        throw new Error("Limit is required")
    }
    const posts = await this.find().sort({createdAt:-1}).limit(limit)
    return posts

}


const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
