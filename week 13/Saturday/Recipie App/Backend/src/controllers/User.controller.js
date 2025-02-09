const userModel = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("../config/config")


module.exports.registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await userModel.findOne({ email })
        if (user) return res.status(400).json({ massage: "Email Already in use Try different email" })

        const h_pass = await bcrypt.hash(password, 10)
        const newuser = await userModel.create({
            name,
            email,
            password: h_pass
        })
        console.log("user Created", newuser)

        const token = jwt.sign({ id: newuser._id }, config.JWT_SECRET)
        res.cookie("token", token)
        res.json({ massage: "user Created sucessfully" })

    } catch (error) {
        res.status(500).json({ error: error.massage })
    }

}

module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.status(400).json({ massage: "Empty parameters" })
        const user = await userModel.findOne({ email })
        if (!user) return res.status(400).json({ massage: `Email or password Invaild` })
        const ispassOk = await bcrypt.compare(password, user.password)
        if (!ispassOk) return res.status(400).json({ massage: `Email or password Invaild` })

        const token = jwt.sign({ id: user._id }, config.JWT_SECRET)
        console.log(token)
        res.cookie("token", token, {
            httpOnly: true,   // ✅ Prevents frontend JS from accessing the cookie
            secure: "production",    // ✅ Set to `true` in production with HTTPS
            sameSite: "strict",  // ✅ Allows cross-site requests
        });

        console.log(1)
        res.json({ massage: "Login Successful" })


    } catch (error) {
        res.status(500).json({ error: error.massage })

    }

}


module.exports.logoutController = async (req, res) => {
    try {
        res.cookie("token", "")
        res.status(200).json({ massage: "Logout Succesful" })
    } catch (error) {
        console.log(error)
    }
}