const env = require("dotenv").config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/user.routes")
const recipieRoutes = require("./routes/recipie.routes")
// Middleware
app.use(morgan('dev')); // Logger middleware
app.use(cors({
    origin: "http://localhost:5173",  // ✅ React frontend URL
    credentials: true,// ✅ Allow cookies
    method: ["GET", "POST"]
})); // Enable CORS
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Basic route

app.use("/user", userRoutes)
app.use("/recipe", recipieRoutes)


module.exports = app