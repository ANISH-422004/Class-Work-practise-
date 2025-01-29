const express = require("express")
const app = express()
const env = require("dotenv").config()
const indexRoutes = require("./routes/index.routes")
const userRoutes = require("./routes/user.routes")




app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use("/",indexRoutes)
app.use("/user",userRoutes)












module.exports = app