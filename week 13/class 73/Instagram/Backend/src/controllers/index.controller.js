const postModel = require("../models/posts.model")
const UserModel = require("../models/user.model")

module.exports.feedController = async(req, res) => {
   try {
        const posts = await postModel.find()
        res.status(200).json({posts})
    
   } catch (error) {
    console.log(error)
    res.status(500).json({message:"Internal Server Error"})    
   }
}