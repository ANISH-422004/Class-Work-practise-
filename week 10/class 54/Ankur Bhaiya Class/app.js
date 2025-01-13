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
// In Express.js, res.render(view, [locals], [callback]) is used to render a view and send the rendered HTML as the response. Here's what each parameter means:

// view: A string specifying the name of the view file (without the file extension) that you want to render.
// locals: An optional object containing local variables to pass to the view. These variables can be used within the template.
// callback: An optional function that gets called after the view is rendered, but before sending the response.


app.get("*",(req,res)=>{
    res.render("not-found")
})





app.listen(3000,()=>{
    console.log("server is running ")
})