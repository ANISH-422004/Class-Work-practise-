const express = require("express")
const app = express()
const env = require("dotenv").config()
const indexRoutes = require("./routes/index.routes")
const AuthRoutes = require("./routes/Auth.routes")
const cookieParser = require("cookie-parser")



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use("/",indexRoutes)
app.use("/auth",AuthRoutes)




module.exports=app