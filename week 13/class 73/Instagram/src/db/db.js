const mongoose = require("mongoose")
const config = require("../config/config")
const connectDB = () => {
    mongoose.connect(config.MONGO_URL).then(() => { console.log("connected to DB") }).catch(() => { console.log("Error connecting to DB") })
}
module.exports = connectDB