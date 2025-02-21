const express = require('express');
const userController = require("../controllers/user.controller")
const router = express.Router();
const authUser = require("../middlewares/user.middlewares")

router.post('/register', userController.RegisterController );
router.post('/login', userController.LoginController );
router.get('/profile', authUser.authUser ,userController.ProfileController );
router.get('/authenticate',authUser.authUser , userController.SendResponseForAuthentication)
module.exports = router;