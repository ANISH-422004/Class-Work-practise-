const UserModel = require("../models/user.model")

module.exports.RegisterController = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) return res.status(400).json({ message: `Either name , email , password is Empty` })

        const user = await UserModel.findOne({

            $or: [
                { name: name },
                { email: email }
            ]
        })

        if (user) return res.status(400).json({ message: `User Already Exists` })

        const h_pass = await UserModel.hashPassword(password)

        const newuser = await UserModel.create({
            name,
            email,
            password: h_pass
        })

        const token = newuser.generateToken()

        res.json({ token: token, newuser: newuser })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}


module.exports.LoginController = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) return res.status(400).json({ message: `Either  email or password is Empty` })

        const userExists = await UserModel.findOne({ email })

        if (!userExists) return res.status(400).json({ message: `Invalid Credentials` })

        const isMatch = await userExists.comparePassword(password)

        if (!isMatch) return res.status(400).json({ message: `Invalid Credentials` })

        const token = userExists.generateToken()

        res.json({ token: token, user: userExists })



    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}




module.exports.ProfileController = async (req, res) => {
    try {
        const populatedUser = await req.user.populate('posts')
        //.populate() is a Mongoose method used to replace references (ObjectIds) in a document with actual data from the referenced collection.
        res.status(200).json({user:populatedUser})

    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "Internal Server Error" })

    }
}



module.exports.SendResponseForAuthentication = (req,res)=>{
    try {
        res.status(200).json({message : 'Authenticated'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "Internal Server Error"})
    }
}