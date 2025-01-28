const { userModel, validateUser } = require("../models/UserModel")
const postsModel = require("../models/postModel")

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

module.exports.indexController = async (req, res) => {

    res.render('index')
}

module.exports.CreateUserController = async (req, res) => {
    try {
        let { name, email, bio, image, password } = req.body
        let error = validateUser({ name, email, bio, image, password })
        if (error) {

            console.log(error.details);

            console.log(error.details.length > 1 ? error.details[1].message : error.details[0].context.message)
            res.status(400).send(error.details[0].message)

        } else {
            console.log("Data is valid")
            const hashpassword = await bcrypt.hash(password, 10)
            const newuser = await userModel.create({
                name: req.body.name,
                email: req.body.email,
                bio: req.body.bio,
                image: req.body.image,
                password: hashpassword
            })
            console.log("created user", newuser)
            res.redirect("/home")
        }
    } catch (error) {
        console.log(error)
    }


}

module.exports.showPostsController = async (req, res) => {
    try {
        const posts = await postsModel.find()
        const lastUserCreated = await userModel.find()
        res.render('posts', { posts: posts, lastUserCreated: lastUserCreated[lastUserCreated.length - 1] })
    } catch (error) {
        console.log(error)
    }
}


module.exports.showCreatePostController = (req, res) => {
    res.render('createpost')
}

module.exports.CreatePostcontroller = async (req, res) => {

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


module.exports.likeController = async (req, res) => {
    try {
        const dbID = req.params.dbID
        const postToupdte = await postsModel.findOne({ _id: dbID })
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

module.exports.deleteController = async (req, res) => {
    try {
        const dbID = req.params.dbID
        const deletedPost = await postsModel.findOneAndDelete({ _id: dbID })
        console.log("deleted post", deletedPost);
        res.redirect("/home")

    } catch (error) {
        console.log(error)

    }
}



module.exports.showloginpageController = async (req, res) => {
    res.render("login")
}
 

module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input fields
        if (!email || !password) {
            return res.redirect("/login"); // Redirect if fields are empty
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.redirect("/login"); // Redirect if user not found
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.redirect("/login"); // Redirect if password is incorrect
        }

        // Successful login
        return res.redirect("/home");

    } catch (error) {
        console.error("Login error:", error);
        return res.redirect("/login"); // Redirect in case of server error
    }
};
