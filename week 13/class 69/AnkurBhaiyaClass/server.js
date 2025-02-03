const app = require("./src/app")
const env = require("dotenv").config()
const connect = require("./src/db/db")













app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})


connect()
