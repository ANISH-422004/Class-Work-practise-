const env= require("dotenv").config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/user.routes")

// Middleware
app.use(morgan('dev')); // Logger middleware
app.use(cors()); // Enable CORS
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser({
    origin: "http://localhost:5173",  // ✅ React frontend URL
    credentials: true,// ✅ Allow cookies
    method:["GET","POST"]
}))

// Basic route

app.use("/user",userRoutes)


module.exports = app