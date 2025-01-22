const express = require("express")
const router = express.Router()
const indexController = require("../controllers/index.controller")
const { route } = require("../app")



router.get("/",indexController.showHomeController)
router.get("/create-user",indexController.showFormController)
router.post("/create-user",indexController.creteUserController)
router.get("/profile/:dbId",indexController.showOneUserController)
router.get("/edit-user/:dbId",indexController.editUserController)
router.post("/update-user/:dbId",indexController.updateUserController)
router.get("/delete-user/:dbId",indexController.deleteController)

module.exports = router