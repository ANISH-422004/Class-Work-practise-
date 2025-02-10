const jwt = require("jsonwebtoken")
const UserModel = require("../models/user.model")
const config = require("../config/config")


module.exports.authUser = async (req, res, next) => {
    try {

        const token = req.headers.authorization.split(" ")[1]
        if (!token) return res.status(401).json({ massage: "Unauthorized" })
        const decoded_token = await jwt.verify(token, config.JWT_SECRET)

        const user = await UserModel.findOne({
            _id: decoded_token.id
        })
        req.user = user
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({ massage: "Unauthorized" })

    }
}