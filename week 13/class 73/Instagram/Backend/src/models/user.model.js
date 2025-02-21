const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const config = require("../config/config")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: [3, "userName must be at least 3 characters long"],
        maxlength: [20, "userName must be at max 20 characters long"],

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    profileIamge: {
        type: String,
        default: "https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png"
    },

    posts: [
        {
            type: mongoose.Schema.Types.ObjectId, //ek ek data ka type object id rahe ga jo ki ek array me staore ho ga 
            ref: "posts"
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }
});


// 🔹 **Instance Method:** Generate JWT Token (Works on a single user)
userSchema.methods.generateToken = function () {
    return jwt.sign({
        id: this._id,
        name: this.name,
        email: this.email
    }, config.JWT_SECRET,{expiresIn:config.JWT_EXPIERES_IN}); // Optional: Add expiration
};

// 🔹 **Static Method:** Verify JWT Token (Works on the model level)
userSchema.statics.verifyToken = (token) => {
    if(!token){
        throw new Error("Token is required")
    }
    return jwt.verify(token, config.JWT_SECRET);
}

// 🔹 **Static Method:** Hash Password (Works on the model level)
userSchema.statics.hashPassword = async function (password) {
    if(!password) throw new Error("Password is required")
    return await bcrypt.hash(password, 10);
};

// 🔹 **Instance Method:** Compare Password (Works on a specific user)
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;