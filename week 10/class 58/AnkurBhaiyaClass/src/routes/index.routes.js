const express = require("express")
const router  = express.Router()
const indexController = require("../controllers/index.controller")

router.get("/",indexController.homeController)
router.get("/create",indexController.userCreateController) // creation 
router.get("/getusers",indexController.getUserController) // reading
router.get("/getuser",indexController.getOneUserController) //reading
router.get("/updateoneuser",indexController.userUpdateController) //updating
router.get("/delete",indexController.userdeleteController) //deletion






module.exports =router