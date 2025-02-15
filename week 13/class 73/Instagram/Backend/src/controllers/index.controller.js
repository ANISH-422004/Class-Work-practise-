const postModel = require("../models/posts.model")
const UserModel = require("../models/user.model")

module.exports.feedController = async (req, res) => {
   try {
      const posts = await postModel.aggregate([
         {
            '$lookup': {
               'from': 'users',
               'localField': 'userId',
               'foreignField': '_id',
               'as': 'author'
            }
         }, {
            '$unwind': {
               'path': '$author'
            }
         }
      ])

      res.status(200).json({ posts })

   } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Internal Server Error" })
   }
}