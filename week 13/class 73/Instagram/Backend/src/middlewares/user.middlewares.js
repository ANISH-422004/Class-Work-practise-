
const UserModel = require("../models/user.model")


module.exports.authUser = async (req, res, next) => {
    try {

        const token = req.headers.authorization?.split(" ")[1]  // if split is applied on undefined then js will throw error

        if (!token) return res.status(401).json({ massage: "Unauthorized" })

        const decoded_token = await UserModel.verifyToken(token)

        if (!decoded_token) res.status(401).json({ massage: "Unauthorized" })

        const user = await UserModel.findOne({
            _id: decoded_token.id
        })

        if (!user) res.status(401).json({ massage: "Unauthorized" })

        req.user = user

        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({ massage: "Unauthorized" })

    }
}