const express = require("express")
const app = express()
const userRoutes = require("./routes/user.routes")
const PostRoutes = require("./routes/post.routes")
const indexRoutes= require("./routes/index.routes")
const aiRoutes = require("./routes/ai.routes")
const morgan = require("morgan")
const cors= require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(cors())


app.use("/",indexRoutes)
app.use("/users",userRoutes)
app.use("/posts",PostRoutes)
app.use("/ai",aiRoutes)





module.exports = app