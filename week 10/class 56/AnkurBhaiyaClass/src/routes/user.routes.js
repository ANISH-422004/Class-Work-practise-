const express = require("express")
const controller = require("../controllers/index.controller")
const router  = express.Router()
const userController  = require("../controllers/user.controller")
 
router.get("/",userController.getProfile)    //    / is found out here this will run run getprofile controller form user.controller.js file 
router.get("/status",userController.getstatus)  //  /status   is found out here this will run getstatus controller form user.controller.js file 
module.exports = router