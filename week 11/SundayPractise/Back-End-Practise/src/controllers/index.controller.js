const userModel = require('../models/user.model.js');
const postModel = require('../models/post.model.js');
const bcrypt = require('bcrypt');

module.exports.indexcontroller = (req, res) => {
    res.send("hello")
}

module.exports.createUserController = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        console.log(error);
    }


}
module.exports.loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            res.send("User not found"); // instade of  sayng user not found we can say invalid email or password to prevenrt bruteforce attack or data leakeage
            throw new Error("User not found");
        } else {
            const isPassWordValid = await bcrypt.compare(password, user.password);
            if (isPassWordValid) {
                res.send(user);
            } else {
                res.send("Invalid Password");
            }
        }


    } catch (error) {
        console.log(error);

    }
}

module.exports.createpostController = async (req, res) => {
    try {
        const user = await userModel.findOne({ name: req.params.username }); // this obj returend by mongoose is a promise which have some methods like save, find, findOne, findOneAndUpdate, findOneAndDelete, update, delete, etc
        const { content } = req.body;
        const createdPost = new postModel({ user: user._id, content });
        await createdPost.save();

        user.posts.push(createdPost._id);
        await user.save();



        res.send(createdPost);

    } catch (error) {
        console.log(error);

    }




}