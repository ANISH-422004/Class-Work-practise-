const {Router} = require("express")
const router = Router()


router.get("/",(req,res)=>{
    res.send("Welcome User")
})





module.exports=router