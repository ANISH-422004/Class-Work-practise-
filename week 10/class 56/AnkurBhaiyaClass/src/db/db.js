const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/kodr")
                                                    .then(()=>{
                                                    console.log("connected to DB");
                                                        
                                                    })
                                                    .catch((err)=>{
                                                    console.log(err);
                                                    
                                                    })


 
const userSchema = new mongoose.Schema({ //creating a schema for the documnets you want store ina specific collection 
    username:String,
    email:String,
    age:Number
})


mongoose.model("users",userSchema)  // creating a  collection called users underwhich userschma wale documents will get stored

