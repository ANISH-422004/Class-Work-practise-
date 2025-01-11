const express = require('express')
const app = express()
const path = require("path")



app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/', function (req, res) {
    res.render('Home')
})


app.get('/form', function (req, res) {
    res.render('form')
})

app.post('/create', function (req, res) {
    res.send('UserCreated')
    console.log(req.body);

})






app.listen(3000)