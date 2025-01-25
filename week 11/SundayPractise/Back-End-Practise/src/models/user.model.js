
const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },  
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Post'

        }
    ]
});



const userModel  = mongoose.model('User', userSchema);


module.exports = userModel;