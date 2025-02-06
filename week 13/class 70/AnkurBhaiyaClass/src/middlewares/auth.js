const jwt = require("jsonwebtoken")
const userModel = require("../models/useModel")
module.exports.AuthenticateUser = async (req, res, next) => {
    const token = req.cookies.token
    if (!token) return res.redirect("/user/login")


    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) return res.redirect("/user/login")
       

    const user = await userModel.findById(decoded._id)
    req.user = user


    next()
}