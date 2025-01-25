const express = require("express")
const router = express.Router()
const indexcontroller = require("../controllers/index.controller")


router.get("/", indexcontroller.indexcontroller)
router.post("/create", indexcontroller.createUserController)
router.post("/:username/create/post", indexcontroller.createpostController)


module.exports = router