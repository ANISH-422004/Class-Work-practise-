const express = require('express');
const userControllers = require("../controllers/User.controller")
const router = express.Router();

// Define route 1
router.post('/register', userControllers.registerController);
router.post('/login', userControllers.loginController);
router.get('/logout', userControllers.logoutController);

module.exports = router;