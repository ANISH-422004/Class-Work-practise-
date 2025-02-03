const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.getUserController = (req, res) => {
    res.render("register")
}

module.exports.postRegisterController = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = jwt.sign({
            _id: user._id,
            email: user.email
        }, process.env.JWT_SERECT)

        res.cookie('Auth-Proj-Token', token)

        res.redirect("/user/feed")

    } catch (error) {

    }
}

module.exports.feedController = async (req, res) => {
    try {
        const token = req.cookies['Auth-Proj-Token']

        if (!token) return res.redirect("/user/login")

        
        const decoded = jwt.verify(token, process.env.JWT_SERECT)
        
        res.render('feed', { email: decoded.email })

    } catch (error) {
        console.log(error)
        res.redirect("/user/login")

    }

}


module.exports.logInController = async(req,res)=>{
    res.render('login')
}