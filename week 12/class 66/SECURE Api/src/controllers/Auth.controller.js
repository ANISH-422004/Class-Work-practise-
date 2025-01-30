const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")


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
    console.log(email,password)
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
    
    
    res.cookie("token", "" , {
        httpOnly: true,
        secure: true,
     })
     res.status(201).send("LoggedOutSuccessfully")
}

module.exports.getUserCoontroller = async (req, res) => {
   
    res.send(req.cookies)
    
}