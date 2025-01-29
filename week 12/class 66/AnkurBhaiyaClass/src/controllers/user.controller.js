const userModel = require("../models/user.Model")
const bcrypt = require("bcrypt")

module.exports.signinController = async (req, res) => {

    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) res.status(400).send("SendValidData")

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

        res.send("Welcome "+user.username)       


    } catch (error) {
        console.log(error);
        
    }
}