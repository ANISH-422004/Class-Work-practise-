const express = require("express")
const app  = express()
const indexRoutes = require("./routes/index.routes")
const userRoutes = require("./routes/user.routes")
const cookieParser = require("cookie-parser")
const env = require('dotenv').config()

app.set("view engine","ejs")
app.set('views','./src/views')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())




app.use("/",indexRoutes)
app.use("/user",userRoutes)
    





module.exports=app