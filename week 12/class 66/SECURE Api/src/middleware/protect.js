const jwt = require("jsonwebtoken")
const UserModel = require("../models/userModel")

module.exports.protect = async (req, res, next) => {
    if (req.cookies.token) {
        
        try {

            const data = jwt.verify(req.cookies.token, process.env.JWT_SECRET)

            let user = await UserModel.findOne({ email: data.email }).select("-password")
            
            next()

        } catch (error) {
            res.status(401).send("Not Authorized")
        }
    } else {
        res.status(401).send("Not Authorized You dont have permission")

    }
}