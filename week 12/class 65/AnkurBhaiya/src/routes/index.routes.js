const express = require('express');
const router = express.Router();
const indexControllers = require('../controllers/index.controller');

router.get('/',  indexControllers.indexController )
router.post('/create-user',  indexControllers.CreateUserController )
router.get('/login',indexControllers.showloginpageController)
router.post('/login',indexControllers.loginController)
router.get('/home',  indexControllers.showPostsController )
router.get('/create-post',  indexControllers.showCreatePostController )
router.post('/create-post',  indexControllers.CreatePostcontroller )
router.get('/like/:dbID',indexControllers.likeController)
router.get('/delete/:dbID',indexControllers.deleteController)


module.exports = router;