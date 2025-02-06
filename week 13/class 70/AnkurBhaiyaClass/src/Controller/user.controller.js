const userModel = require("../models/useModel")
const postModel = require("../models/postModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



module.exports.registerController = (req, res) => {
    res.render("register")
}


module.exports.createUserController = async (req, res) => {
    try {

        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)

        //if user alredy exist make user just log in 
        const isUserAlready = await userModel.findOne({ email })
        if (isUserAlready) {
            console.log("userAlreadyExists")
            return res.redirect("/user/login")
        }


        const user = await userModel.create({
            name,
            email,
            password: hashedPassword
        })
        if (!user) return res.redirect("/user/register");

        const token = jwt.sign({
            id: user._id,
            email: email
        }, process.env.JWT_SECRET)

        res.cookie("token", token)

        res.redirect("/user/feed")


    } catch (error) {
        console.log(error)
        res.redirect("/user/register");
    }
}



module.exports.feedController = async (req, res) => {

    try {
        const token = req.cookies.token

        if (!token) return res.redirect("/user/register")

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const posts = await postModel.find()

        res.render("feed", { posts });
    }
    catch (error) {
        console.log(error)

        res.redirect("/user/register")
    }


}


module.exports.ShowloginController = (req, res) => {

    res.render("login")

}

module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if (!user) {
            console.log("user Does not exists")
            return res.render("/user/register")
        }

        const isPassOk = await bcrypt.compare(password, user.password);

        if (!isPassOk) return res.redirect("/user/login");

        const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET
        );

        res.cookie("token", token, { httpOnly: true });

        res.redirect("/user/feed");


    } catch (error) {
        console.log(error)
        res.redirect("/user/login")
    }
}


module.exports.ShowPostController = (req, res) => {
    try {
        res.render("createpost")

    } catch (error) {
        console.log(error)
        res.redirect("/user/login")
    }
}

module.exports.createPostController = async (req, res) => {
    try {
        const { image, caption } = req.body
        const post = await postModel.create({
            image,
            caption,

        })

        if (!post) return res.redirect("/user/create-post")

        res.redirect("/user/feed")

    } catch (error) {
        console.log(error)
        res.redirect("/user/create-post")
    }
}