const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[a-zA-Z0-9]+$/  // alphanumeric only
    },
    email: {
        type: String,
        required: true,
        unique: [true,"Email already exists"],
        trim: true,
        lowercase: true,
        minlength: 5,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  // email validation regex
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('User', userSchema);