const express = require('express')
const indexRoutes = require("./routes/index.routes")
const app = express()



app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/", indexRoutes)




module.exports = app