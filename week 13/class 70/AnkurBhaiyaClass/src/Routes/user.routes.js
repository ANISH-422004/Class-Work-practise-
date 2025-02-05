const express = require("express")
const router  = express.Router()
const userControllers = require("../Controller/user.controller")


router.get("/register", userControllers.registerController)
router.post("/register",userControllers.createUserController)
router.get("/login",userControllers.ShowloginController)
router.post("/login",userControllers.loginController)
router.get("/create-post",userControllers.ShowPostController)
router.post("/create-post",userControllers.createPostController)
router.get("/feed",userControllers.feedController)



module.exports = router