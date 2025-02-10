const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userModel = require("./model/user.model");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ React frontend URL
    credentials: true, // ✅ Allow cookies
    methods: ["GET", "POST"],
  })
);
app.use(morgan("tiny"));

// ✅ Database Connection
mongoose
  .connect("mongodb://localhost:27017/Refresh_Access_Token")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log("Error connecting to DB");
  });

// ✅ Register Route
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await userModel.create({
      name,
      email,
      password,
    });
    res.status(200).json({ message: "User Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

// ✅ Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await userModel.findOne({ email });
    if (!userExist) return res.status(400).json({ message: "Invalid Credentials" });
    if (userExist.password !== password) return res.status(400).json({ message: "Invalid Credentials" });

    const accessToken = jwt.sign({ email }, "Secret", { expiresIn: "1m" });
    const refreshToken = jwt.sign({ email }, "Secret", { expiresIn: "5m" });

    // ✅ Store access and refresh tokens in HTTP-only cookies
    res.cookie("accessToken", accessToken, {
      maxAge: 60000,
      httpOnly: true, // Important: Prevents XSS attacks
      secure: false, // Set to true if using HTTPS
      sameSite: "strict",
    });

    res.cookie("refreshToken", refreshToken, {
      maxAge: 300000,
      httpOnly: true, // Secure refresh token
      secure: false, // Set to true if using HTTPS
      sameSite: "strict",
    });

    res.json({ message: "Login Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Middleware to Verify Access Token
const verifyUser = (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return renewToken(req, res, next); // Call renew function if no access token
    }

    const decoded = jwt.verify(accessToken, "Secret");
    if (!decoded) return res.status(401).json({ valid: false, message: "Unauthorized" });

    req.email = decoded.email; // Store email in request
    next();
  } catch (error) {
    console.log("Access Token Expired, Trying to Refresh...");
    return renewToken(req, res, next); // Call renew function if token expired
  }
};

// ✅ Function to Renew Access Token Using Refresh Token
const renewToken = (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(403).json({ valid: false, message: "No Refresh Token" });

    const decoded = jwt.verify(refreshToken, "Secret");
    if (!decoded) return res.status(403).json({ valid: false, message: "Invalid Refresh Token" });

    // Generate new access token
    const newAccessToken = jwt.sign({ email: decoded.email }, "Secret", { expiresIn: "1m" });

    res.cookie("accessToken", newAccessToken, {
      maxAge: 60000,
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    console.log("New Access Token Issued");
    req.email = decoded.email;
    next();
  } catch (error) {
    console.log("Refresh Token Expired:", error);
    return res.status(403).json({ valid: false, message: "Refresh Token Expired" });
  }
};

// ✅ Protected Route
app.get("/dashboard", verifyUser, async (req, res) => {
  return res.json({ valid: true, message: "Authorized", email: req.email });
});

// ✅ Start Server
app.listen(3000, () => {
  console.log("Running on port 3000");
});
    