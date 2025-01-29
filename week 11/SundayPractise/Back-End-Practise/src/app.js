let express = require('express');
let app = express();
const path = require('path');
const indexRoutes = require('./routes/index.routes');
const cookieParser= require("cookie-parser")

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));//Using path.join() is better than manually concatenating strings (__dirname + '/src/views') because:
app.set('views', path.join(__dirname, 'views')); //__dirname is not a function, but a global variable in Node.js. It represents the absolute directory path of the current file where you are using it.
app.set('view engine', 'ejs');
app.use(cookieParser())



app.use("/" ,indexRoutes)








module.exports = app;

