const express = require("express")
const router = express.Router()
const indexControllers = require("../Controller/index.controller")


router.get("/",indexControllers.showHomeController)


module.exports = router