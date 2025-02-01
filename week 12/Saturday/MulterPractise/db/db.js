const mongoose = require('mongoose')


const connectDB = ()=> mongoose.connect('mongodb://localhost:27017/MulterPractise').then(()=>{
    console.log("Connected to DB")
}).catch(()=>{
    console.log("Error connecting to DB")
})

module.exports = connectDB