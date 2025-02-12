const express = require("express")
const app = express()
const userRoutes = require("./routes/user.routes")
const PostRoutes = require("./routes/post.routes")
const indexRoutes= require("./routes/index.routes")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",indexRoutes)
app.use("/users",userRoutes)
app.use("/posts",PostRoutes)

module.exports = app