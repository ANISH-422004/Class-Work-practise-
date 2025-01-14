const express = require("express")
const router = express.Router()


router.get("*",(req,res)=>{
    res.render("error" ,{ errorMessage: "404 : Page Not Found" })
})


module.exports = router