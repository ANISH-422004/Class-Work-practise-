const env = require("dotenv").config() // write env file at top always 
const app  = require("./src/app")
const config = require("./src/config/config")



app.listen(config.PORT,()=>{
    console.log(`server is running on port ${config.PORT}`)
})


const connectDB = require("./src/db/db")()