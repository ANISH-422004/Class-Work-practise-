const express = require("express")
const router = express.Router()
const indexcontroller = require("../controllers/index.controller")


router.get("/",indexcontroller.homecontroller)



router.get("/show-todo",indexcontroller.todocontroller)

router.get("/create-todo",indexcontroller.createtodo)

router.post("/created",indexcontroller.creation)




module.exports = router
