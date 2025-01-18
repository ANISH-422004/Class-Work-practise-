
const userModel = require("../models/user.model")

module.exports.homeController = (req, res) => {
    res.send("Home")
}
module.exports.userCreateController = async (req, res) => {
    const { name, email, password } = req.query;

    // Validate input fields
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check if the email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Create and save the user
        const newuser = new userModel({
            name,
            email,
            password
        });

        await newuser.save();

        res.status(201).json({ message: "User registered successfully", user: newuser });
    } catch (err) {
        console.error("Error in userCreateController:", err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};


module.exports.getUserController = async (req, res) => {
    const users = await userModel.find({ name: "" }).then(saveduser => console.log(saveduser)).catch(err => { console.log(err) }) //[{},{},{},[}] or []

    res.send("FetchedUsers")


}


module.exports.getOneUserController = async (req, res) => {
    const user = await userModel.findOne({ email: "a@a.comsdas" })
        .then(saveduser => {
            res.send("fetch FetchedOneuser")   // but the fetch could be nul or and object 
            console.log(saveduser)
        }).catch(err => {
            console.log(err)
            res.send("cantfetch FetchedOneuser")
        })

}


module.exports.userUpdateController = async (req, res) => {
    await userModel.findOneAndUpdate(
        {
            name: "anis"
        },
        {
            email: "anishXYW@gggggggsdasdasda23 r2p9r2  rhgggggggggg.com"
        },
        { new: true } //{new: true} option will return the updated user instead of the original user.
    )
        .then(updateduser => {
            if (updateduser) {

                console.log("updateduser", updateduser)

            } else {
                console.log("UserNotFound")

            }
        })
        .catch(err => console.log(err))
}


module.exports.userdeleteController = async (req, res) => {
    await userModel.findOneAndDelete({
        name: 'anishasda'                   // whom to delete 
    })
        .then(deletedUser => {
            if (deletedUser)
                console.log("deleted user:", deletedUser)
            else {
                console.log("user not found")
            }
        })
        .catch(error => {
            console.log("error deleting user:", error)
        })
}
