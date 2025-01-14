const express = require("express")
const app = express()
const indexroutes = require("./routes/index.routes")


app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))

app.use("/",indexroutes)


module.exports = app