const mongoose = require("mongoose")
const config = require("../config/config")
const connect = ()=>mongoose.connect(config.MONGO_URL).then(() => { console.log("connected to DB") }).catch(() => { console.log("Error Connecting to DB") })
module.exports=connect