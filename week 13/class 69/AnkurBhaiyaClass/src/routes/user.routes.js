const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")


router.get("/register",userController.getUserController)
router.post("/register",userController.postRegisterController)
router.get("/login",userController.logInController)
router.get("/feed",userController.feedController)

module.exports = router