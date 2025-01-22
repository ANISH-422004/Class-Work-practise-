const userModel = require("../models/user.model")



module.exports.showHomeController = async (req, res) => {
    try {
        const users = await userModel.find()
        res.render("index", { users })
    } catch (error) {
        console.log(error)
    }
}

module.exports.showFormController = (req, res) => {
    res.render("create")
}

module.exports.creteUserController = async (req, res) => {
    try {
        const { name, email, bio } = req.body
        const newUser = new userModel({
            name: name,
            email: email,
            bio: bio
        })
        await newUser.save()
        console.log("created:",newUser)
        res.redirect("/")

    } catch (error) {
        console.log(error)
    }

}

module.exports.showOneUserController = async (req, res) => {
    try {
        const user = await userModel.findOne({
            _id: req.params.dbId
        })
        console.log(user);

        res.render("show", { user })
    } catch (error) {
        console.log(error)
    }
}


module.exports.editUserController = async (req, res) => {
    try {
        const user = await userModel.findOne({
            _id: req.params.dbId
        })
        console.log(user);

        res.render("edit", { user })
    } catch (error) {
        console.log(error)
    }
}


module.exports.updateUserController = async (req, res) => {
    try {
        const { name, email, bio } = req.body
        const user = await userModel.findOneAndUpdate(
            {
                _id: req.params.dbId
            }, 
            {
            name: name,
            email: email,
            bio: bio
            },
            {
                new: true
            }
        )
        console.log("updatedTo : ", user);


        res.redirect("/")
    } catch (error) {
        console.log(error)
    }
}


module.exports.deleteController = async (req, res) => {
    try {
        const user = await userModel.findOneAndDelete({
            _id: req.params.dbId
        })
        console.log("deleted : " , user);

        res.redirect("/")
    } catch (error) {
        console.log(error)
    }
}
