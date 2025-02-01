const express = require('express');
const app = express();
const userModel = require('./models/userModel')
const multer = require('multer');

app.get('/', (req, res) => {
    res.send('Hello World!')
})










app.listen(3000, () => {
    console.log('Server running on port 3000')
})




const connectDB = require("./db/db")()
