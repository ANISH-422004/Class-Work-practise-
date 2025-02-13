const postModel = require("../models/posts.model")
const UserModel = require("../models/user.model")

module.exports.createPostController = async (req, res) => {
    try {
        const userId = req.user.id;

        const { media, caption } = req.body
        if (!media) return res.status(400).json({ message: "media required" })
        if (!caption) return res.status(400).json({ message: "caption required" })
        const newPost = await postModel.create({ media, caption ,userId})

        await UserModel.findByIdAndUpdate(userId, {
            $push: { posts: newPost._id }
        });

        res.status(201).json({ message: "Post Created", newPost })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }

}