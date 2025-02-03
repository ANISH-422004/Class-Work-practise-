const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.getUserController = (req, res) => {

    res.render("register");
};

module.exports.postRegisterController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const isUserAlready = await userModel.findOne({email})

        if(isUserAlready) {
            console.log("userAlreadyExists")
            return res.redirect("/user/login")
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        if (!user) return res.redirect("/user/register"); 

        const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET 
        );

        res.cookie("Auth-Proj-Token", token, { httpOnly: true });

        res.redirect("/user/feed");
    } catch (error) {
        console.error(error);
        res.redirect("/user/register");
    }
};

module.exports.feedController = async (req, res) => {
    try {
        const token = req.cookies['Auth-Proj-Token'];

        if (!token) return res.redirect("/user/login");

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        res.render("feed", { email: decoded.email });
    } catch (error) {
        console.error(error);
        res.redirect("/user/login");
    }
};

module.exports.ShowlogInController = async (req, res) => {
    res.render("login");
};

module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            console.log("User not found"); 
            return res.redirect("/user/login"); 
        }

        const isPassOk = await bcrypt.compare(password, user.password);

        if (!isPassOk) return res.redirect("/user/login");

        const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET
        );

        res.cookie("Auth-Proj-Token", token, { httpOnly: true });

        res.redirect("/user/feed");
    } catch (error) {
        console.error(error);
        res.redirect("/user/login");
    }
};
