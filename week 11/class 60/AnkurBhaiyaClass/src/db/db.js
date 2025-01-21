const mongoose = require("mongoose")

const userModel = require("../models/user.model.js")

const connect = ()=>{
    mongoose.connect("mongodb://0.0.0.0/kodr").then(()=>{console.log("Connected to DB")}).catch((err)=>{console.log(err)})
} // we connect to on data base("kodr") only in a single application and in that DB we have multiple collections like user , products etc ... 

module.exports = connect