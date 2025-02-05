const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const env = require("dotenv").config()
const indexRoutes = require("./Routes/index.routes")
const userRoutes = require("./Routes/user.routes")


app.set("view engine","ejs")
app.set('views','./src/views')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())




app.use("/",indexRoutes)
app.use("/user", userRoutes)





module.exports = app