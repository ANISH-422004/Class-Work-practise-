const express = require('express');
const userController = require("../controllers/user.controller");
const userMiddleWare = require("../middlewares/user.middlewares");

const router = express.Router();

router.post('/register', userMiddleWare.RegisterUserValidation, userController.RegisterController);
router.post('/login', userMiddleWare.LoginUserValidation ,userController.LoginController);
router.get('/logout', userMiddleWare.authUser,userController.LogoutController);
router.get('/profile', userMiddleWare.authUser, userController.ProfileController);
router.get('/authenticate', userMiddleWare.authUser, userController.SendResponseForAuthentication);

module.exports = router;
