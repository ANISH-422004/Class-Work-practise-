const express = require("express")
const app = express()
const indexRoutes = require("./routes/index.routes")
const cors = require("cors")



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",indexRoutes)


module.exports = app