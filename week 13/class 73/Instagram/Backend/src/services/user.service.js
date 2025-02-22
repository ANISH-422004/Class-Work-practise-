const UserModel = require("../models/user.model")



module.exports.CreateUser = async ({ name, email, password }) => {
    if (!name || !email || !password) throw new Error(`Either name , email , password is Empty`)

    const user = await UserModel.findOne({

        $or: [
            { name: name },
            { email: email }
        ]
    })

    if (user) throw new Error(`User Already Exists`)

    const h_pass = await UserModel.hashPassword(password)

    const newuser = await UserModel.create({
        name,
        email,
        password: h_pass
    })

    delete newuser._doc.password

    return newuser


}

module.exports.LoginUser = async ({ email, password }) => {
    if (!email || !password) throw new Error(`Either  email or password is Empty`)

    const userExists = await UserModel.findOne({ email })

    if (!userExists) throw new Error(`Invalid Credentials`)

    const isMatch = await userExists.comparePassword(password)
    
    delete userExists._doc.password

    if (!isMatch) throw new Error(`Invalid Credentials`)

        
    return userExists 

}