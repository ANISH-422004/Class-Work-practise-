const express  = require ("express")
const app = express()

app.set("view engine","ejs")
app.use(express.static("public"))

let data = [
    {name:"anish",age:20},
    {name:"ansh",age:30}
]

app.get("/",(req,res)=>{
    res.render("Home",{data:data})

})



app.get("*",(req,res)=>{
    res.render("not-found")
})





app.listen(3000,()=>{
    console.log("server is running ")
})