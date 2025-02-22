const { redis } = require("../services/redis.service")
const UserModel = require("../models/user.model")
const { body } = require('express-validator');

module.exports.RegisterUserValidation = [
    body('name')
        .isString().withMessage('Name must be a string')
        .trim()
        .isLength({ min: 3, max: 20 }).withMessage('Name must be between 3 and 20 characters'),

    body('email')
        .isEmail().withMessage('Invalid email format')
        .trim(),

    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
]

module.exports.LoginUserValidation = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),
]

module.exports.authUser = async (req, res, next) => {
    try {

        const token = req.headers.authorization?.split(" ")[1]  // if split is applied on undefined then js will throw error

        if (!token) return res.status(401).json({ massage: "Unauthorized" })

        const isTokenBlackListed = await redis.get(`blacklist:${token}`)

        if (isTokenBlackListed) {
            return res.status(401).json({ massage: "Unauthorized" })
        }

        const decoded_token = await UserModel.verifyToken(token)

        if (!decoded_token) res.status(401).json({ massage: "Unauthorized" })

        let user = await redis.get(`user:${decoded_token.id}`)

        if (user) {
            user = JSON.parse(user)
        }

        if (!user) {
            user = await UserModel.findOne({
                _id: decoded_token.id
            })
            if (user) {
                delete user._doc.password
                await redis.set(`user:${decoded_token.id}`, JSON.stringify(user))
            } else {
                res.status(401).json({ massage: "Unauthorized" })
            }
        }

        req.user = user
        req.tokenData = { token, ...decoded_token }

        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({ massage: error.massage })

    }
}