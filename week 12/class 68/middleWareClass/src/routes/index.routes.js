const { Router } = require("express")
const indexController = require("../controllers/index.controller")
const router = Router()

router.get("/", [indexController.indexController, indexController.indexController2])



router.get("/home", (rea, res, next) => {
    console.log("This is home page1")
    next()

})
router.get("/home", (rea, res, next) => {
    console.log("This is home page2")
    next()

})
router.get("/home", (rea, res, next) => {
    console.log("This is home page3")
    
    res.send("Result")
    

})

module.exports = router