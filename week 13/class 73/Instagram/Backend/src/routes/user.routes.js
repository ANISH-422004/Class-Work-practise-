const express = require('express');
const userController = require("../controllers/user.controller")
const router = express.Router();
const authUser = require("../middlewares/authusers")

router.post('/register', userController.RegisterController );
router.post('/login', userController.LoginController );
router.get('/profile', authUser.authUser ,userController.ProfileController );

module.exports = router;