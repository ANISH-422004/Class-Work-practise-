const express = require("express")
const app = express()
const indexroutes = require("./routes/index.routes")

express.json() //parse incomign request in json 

app.use("/" , indexroutes)


module.exports = app