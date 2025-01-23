const { post } = require("../app")
const userModel = require("../models/UserModel")
const postsModel = require("../models/postModel")

module.exports.indexController = (req, res) => {
    res.render('index')
}

module.exports.CreateUserController = async(req, res) => {
    try {
        const newuser = await userModel.create({
            name: req.body.name,
            email: req.body.email,
            bio: req.body.bio,
            image: req.body.image
        })
        console.log("created user", newuser)
        res.redirect("/home")
    } catch (error) {
        console.log(error)
    }
    
    
}

module.exports.showPostsController = async(req, res) => {
    try {
        const posts = await postsModel.find()
        console.log(posts);
        
        res.render('posts', {posts:posts})
    } catch (error) {
        console.log(error)
    }
}


module.exports.showCreatePostController = (req, res) => {
    res.render('createpost')
}

module.exports.CreatePostcontroller = async(req, res) => {
    
    try {
        const newpost = await postsModel.create({
            image: req.body.image,
            caption: req.body.caption
        })
        console.log("created post", newpost)
        res.redirect("/home")
    } catch (error) {
        console.log(error)
    }
}


module.exports.likeController = async(req,res)=>{
    try {
        const dbID = req.params.dbID
        const postToupdte = await postsModel.findOne({_id:dbID})
        const updatedPost = await postsModel.findOneAndUpdate(
            postToupdte,
            {
                likes: postToupdte.likes + 1
            }
        )
        res.redirect("/home")

    } catch (error) {
        console.log(error)
    }


}