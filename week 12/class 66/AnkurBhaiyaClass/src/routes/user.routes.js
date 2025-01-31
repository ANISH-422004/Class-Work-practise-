const express = require('express');
const userControllers = require("../controllers/user.controller")
const router = express.Router();


// sign in
router.post('/signin',userControllers.signinController );

// login 
router.post('/login', userControllers.loginController);

//getprofile
router.get('/profile',userControllers.profileController)
// 1. Why POST for Login?
// Logging in is not just a simple retrieval of data; it involves processing and creating a new session/token. Here's why POST is the best choice:

// ✅ A. Login Involves Data Processing
// When a user logs in, the API:

// Validates credentials (email & password).
// Generates a JWT token (or session cookie).
// Sends the token back to the client.
// Since this action modifies state on the backend (generating a token/session), POST is appropriate.










module.exports = router;