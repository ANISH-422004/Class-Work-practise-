const express = require("express")
const router = express.Router()
const indexcontroller = require("../controllers/index.controller")


router.get("/", indexcontroller.indexcontroller)
router.post("/create", indexcontroller.createUserController)
router.post("/login", indexcontroller.loginUserController)
router.post("/:username/create/post", indexcontroller.createpostController)
router.get("/token",indexcontroller.tokenGenerateController)
router.get("/decodedtokendata",indexcontroller.tokendDecoderController)

module.exports = router