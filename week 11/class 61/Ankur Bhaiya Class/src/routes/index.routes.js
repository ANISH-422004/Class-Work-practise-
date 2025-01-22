const express = require("express")
const router = express.Router()
const indexRoutes = require("../controllers/index.controller")



router.get("/",indexRoutes.showHomeController)

module.exports = router