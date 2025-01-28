const mongoose = require("mongoose")
const joi = require("joi"); //helps in validation of data before saving it to the database the data should be in the form of an object
const Joi = require("joi");
//cliet  --> server --> joi --> mongoosevalidaionlayer --> database
const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please enter a valid email address",
        ],
    },
    image: {
        type: String,
        required: [true, "Profile image is required"],
        default:
            "https://www.gravatar.com/avatar/?d=identicon", // Default profile image
    },
    bio: {
        type: String,
        required: [true, "Bio is required"],
        trim: true,
        maxlength: [200, "Bio cannot exceed 200 characters"],
    },
    password: {
        type: String,
        // required: [true, "password must needed"],
        trim: true,

    }



})



function validateUser(data) {
    const schema = Joi.object({
        name: Joi.string()
            .trim()
            .min(3)
            .max(50)
            .required()
            .messages({
                "string.empty": "Name is required",
                "string.min": "Name must be at least 3 characters long",
                "string.max": "Name cannot exceed 50 characters",
            }),

        email: Joi.string()
            .trim()
            .lowercase()
            .email() // Uses Joi's built-in email validation
            .custom((value, helpers) => {
                if (!value.endsWith(".com") && !value.endsWith(".edu")) {
                    return helpers.error("any.invalid", { message: "Email should end with .com or .edu" });
                }
                return value;
            })
            .required()
            .messages({
                "string.empty": "Email is required",
            }),

        image: Joi.string()
            .uri()
            .required()
            .messages({
                "string.empty": "Profile image URL is required",
                "string.uri": "Please provide a valid URL for the profile image",
            }),

        bio: Joi.string()
            .trim()
            .max(200)
            .required()
            .messages({
                "string.empty": "Bio is required",
                "string.max": "Bio cannot exceed 200 characters",
            }),
        password: Joi.string()
            .trim()
            .min(8)
            .max(50)
            .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            .required()
            .messages({
                "string.empty": "Password is required",
                "string.min": "Password must be at least 8 characters long",
                "string.max": "Password cannot exceed 50 characters",
                "string.pattern.base": "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            }),
    });

    let { error } = schema.validate(data, { abortEarly: false }); // Prevents stopping at the first error
    return error;
}




const userModel = mongoose.model("User", UserSchema)

module.exports = { userModel, validateUser }
