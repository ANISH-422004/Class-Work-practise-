const express = require('express');
const userMiddleware = require("../middlewares/user.middlewares")
const postControllers = require("../controllers/Post.controller")
const router = express.Router();
const postMiddleware = require("../middlewares/post.middlewares")

router.post('/create', userMiddleware.authUser, postMiddleware.handelFileUpload ,postControllers.createPostController)

module.exports = router;