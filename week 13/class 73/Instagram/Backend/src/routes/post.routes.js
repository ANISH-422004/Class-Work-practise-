const express = require('express');
const userMiddleware = require("../middlewares/user.middlewares")
const postControllers = require("../controllers/Post.controller")
const router = express.Router();


router.post('/create', userMiddleware.authUser, postControllers.createPostController)

module.exports = router;