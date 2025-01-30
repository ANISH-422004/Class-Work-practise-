const userModel = require("../models/user.Model")
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
const env = require("dotenv").config()

module.exports.signinController = async (req, res) => {

    try {

        const { username, email, password } = req.body
        if (!username || !email || !password) res.status(400).send("SendValidData")

        const user = await userModel.findOne({email})
        
        if(user) return res.status(400).send("UserAlreadyexists")

        const hashedpassword = await bcrypt.hash(password, 10)

        if (!hashedpassword) return res.status(500).send("Couldnotcreatetheuser")

        const newUser = await userModel.create
            ({
                username, email, password: hashedpassword
            })

        if (!newUser) return res.status(500).send("Couldnotcreatetheuser")

        res.send(newUser)

    } catch (error) {
        console.log(error);
    }

}

module.exports.loginController = async(req,res)=>{
    try {
        const {email ,password} =req.body
        
        if(!email || !password ) return res.status(400).send("Either email or password is blank")

        const user = await userModel.findOne({email})

        if(!user) return res.send("Either email or password is invalid")

        const isPassOk= await bcrypt.compare(password,user.password)

        if (!isPassOk) return res.send("Either email or password is invalid")

        const token =  JWT.sign(
            {
                _id:user._id,
                emial:user.email
            }
            ,
            process.env.JWT_SECRET

        )   

        res.status(200).json({
            massage:"Welcome user and here is your token",
            token:token
        })      


    } catch (error) {
        console.log(error);
        
    }
}



module.exports.profileController = async(req,res)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1]
        
        if (!token) {
            return res.status(401).send("No token provided")
        }

        const decoded = JWT.verify(token, process.env.JWT_SECRET)
        
        const user = await userModel.findOne({
            _id: decoded._id
        })

        if (!user) {
            return res.status(404).send("User not found")
        }

        res.status(200).send(user)
    } catch (error) {
        res.status(401).send("Invalid token")
    }
}