const express  = require("express")
const router = express.Router()
const indexcontrollers  = require("../controllers/index.controller")

router.get("/",indexcontrollers.homepageshow)
router.get("/register",indexcontrollers.profilecreationcontroller)

module.exports = router