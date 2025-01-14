const express = require("express")
const app = express()
const indexroutes = require("./routes/index.routes")
const errorroutes = require("./routes/error.routes")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))

app.use("/",indexroutes)

app.use("*",errorroutes)

module.exports = app