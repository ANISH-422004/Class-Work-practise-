const {Router} = require("express")
const   router = Router()


router.get("/",(req,res)=>{
    res.send("Welcome To website")
})





module.exports=router