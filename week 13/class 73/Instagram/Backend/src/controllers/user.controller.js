const { redis } = require("../services/redis.service")
const UserModel = require("../models/user.model")
const validationResult = require("express-validator").validationResult
const userService = require("../services/user.service")


module.exports.RegisterController = async (req, res) => {
    try {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body
        const newuser = await userService.CreateUser({ name, email, password })
        const token = newuser.generateToken()

        res.json({ token: token, newuser: newuser })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}


module.exports.LoginController = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const { email, password } = req.body
        const userExists = await userService.LoginUser({ email, password })
        const token = userExists.generateToken()
        res.json({ token: token, user: userExists })


    } catch (error) {
        console.log(error)
        res.status(401).json({ message: error.message })
    }
}

module.exports.LogoutController = async (req, res) => {
    try {

        const timeRemainingForToken = req.tokenData.exp * 1000 - Date.now()
        await redis.set(`blacklist:${req.tokenData.token}`, true, "EX", Math.floor(timeRemainingForToken / 1000))
        res.json({ message: 'Logout Successful' })

    } catch (error) {
        console.log(error)

    }
}




module.exports.ProfileController = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id) // Fetch user as a Mongoose document
        const populatedUser = await user.populate('posts')
        //.populate() is a Mongoose method used to replace references (ObjectIds) in a document with actual data from the referenced collection.
        res.status(200).json({ user: populatedUser })

    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "Internal Server Error" })

    }
}



module.exports.SendResponseForAuthentication = (req, res) => {
    try {
        res.status(200).json({ message: 'Authenticated' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}