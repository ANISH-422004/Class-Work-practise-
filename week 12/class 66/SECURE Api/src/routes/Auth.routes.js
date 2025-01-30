const express = require("express")
const router = express.Router()
const Controllers = require("../controllers/Auth.controller")
const {protect} = require("../middleware/protect")


router.get("/", Controllers.AuthController)

router.post("/register",Controllers.registerCoontroller)

router.post("/login", Controllers.loginCoontroller)

router.get("/logout", Controllers.logoutCoontroller)

router.get("/profile", protect, Controllers.getUserCoontroller)


module.exports = router