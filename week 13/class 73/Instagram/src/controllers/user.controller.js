const UserModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const config = require("../config/config")
const { use } = require("../app")

module.exports.RegisterController = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) return res.status(400).json({ massage: `Either name , email , password is Empty` })

        const user = await UserModel.findOne({

            $or: [
                { name: name },
                { email: email }
            ]
        })

        if (user) return res.status(400).json({ massage: `User Already Exists` })

        const h_pass = await bcrypt.hash(password, 10)

        const newuser = await UserModel.create({
            name,
            email,
            password: h_pass
        })

        const token = jwt.sign({
            id: newuser._id,
            name: newuser.name,
            email: newuser.email,

        }, config.JWT_SECRET)

        res.json({ token: token, newuser: newuser })

    } catch (error) {
        console.log(error)
        res.status(500).json({ massage: "Internal Server Error" })
    }
}


module.exports.LoginController = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) return res.status(400).json({ massage: `Either  email or password is Empty` })

        const userExists = await UserModel.findOne({ email })

        if (!userExists) return res.status(400).json({ massage: `Invalid Credentials` })

        const isMatch = await bcrypt.compare(password, userExists.password)

        if (!isMatch) return res.status(400).json({ massage: `Invalid Credentials` })

        const token = jwt.sign({
            id: userExists._id,
            name: userExists.name,
            email: userExists.email,

        }, config.JWT_SECRET)

        res.json({ token: token, user: userExists })



    } catch (error) {
        console.log(error)
        res.status(500).json({ massage: "Internal Server Error" })
    }
}




module.exports.ProfileController = async (req, res) => {
    try {

        res.json(req.user)

    } catch (error) {
        console.log(error)
        res.status(401).json({ massage: "Unauthorized" })

    }
}