const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")
const jwt = require("jsonwebtoken")

module.exports.AuthController = (req, res) => {
    res.send("Auth / route")
}


module.exports.registerCoontroller = async (req, res) => {
    try {
        const { name, email, password } = req.body
        let user = await UserModel.findOne({ email })
        if (user) return res.status(400).send("Your Accout Already Exisets")


        const hash = await bcrypt.hash(password, 10)
        user = await UserModel.create({
            name,
            email,
            password: hash
        })

        let token = generateToken({ email })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
        })

        res.send(user)

    } catch (error) {
        console.log(error)
    }

}


module.exports.loginCoontroller = async (req, res) => {

    const { email, password } = req.body
    console.log(email, password)
    try {
        let user = await UserModel.findOne({ email })


        if (!user) return res.status(400).send("Invalid Password or Email")

        let result = await bcrypt.compare(password, user.password)

        if (!result) {
            return res.send("Invalid Email or Password")
        }

        let token = generateToken({ email })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
        })


        res.send("logged in")

    } catch (error) {
        res.send(error.message)
    }


}

module.exports.logoutCoontroller = async (req, res) => {


    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
    })
    res.status(201).send("LoggedOutSuccessfully")
}



module.exports.getUserCoontroller = async (req, res) => {
    try {


        const decodedToken = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

        // Find the user associated with the token's email
        let user = await UserModel.findOne({ email: decodedToken.email }).select("-password");

        // If user not found, return 404 (Not Found)
        if (!user) {
            return res.status(404).send({ error: "User not found." });
        }

        // Send the response with user data and token (for debugging purposes)
        res.status(200).send({
            tokenSentByUser: req.cookies.token, // Note: Make sure you use req.cookies.token
            user
        });

    } catch (error) {
        // Catch JWT or other errors and return a 500 (Internal Server Error)
        console.error(error); // Logging error for debugging purposes
        res.status(500).send({ error: "An error occurred while retrieving the user." });
    }
};
