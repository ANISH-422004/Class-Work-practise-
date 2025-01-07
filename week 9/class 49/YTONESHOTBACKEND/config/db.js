const mongoose = require('mongoose')

const connection =  mongoose.connect('mongodb://0.0.0.0/men').then(
    ()=>{
        console.log("coneected To DataBase");
        
    }
 )

 module.exports = connection