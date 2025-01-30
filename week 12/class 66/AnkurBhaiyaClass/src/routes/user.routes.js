const express = require('express');
const userControllers = require("../controllers/user.controller")
const router = express.Router();


// sign in
router.post('/signin',userControllers.signinController );

// login 
router.post('/login', userControllers.loginController);

//getprofile
router.get('/profile',userControllers.profileController)




module.exports = router;