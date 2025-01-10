// l-60
// const http = require("http")

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
        
//         res.end("HOME PAGE")
//     }else if (req.url === "/about"){
//         res.end("About Page")

//     }else{
//         res.end("Not Found")

//     }

// })

// server.listen(3000)


//l61 nothing



//l75
// const express = require("express")
// const app = express()


// app.use((req,res,next)=>{
//     console.log("m1");
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("m2");
//     next()
// })



// app.get("/",(req,res)=>{
//     res.send("HomePage")
// })

// app.use((req,res,next)=>{
//     console.log("m3");
//     next()
// })

// app.get("/about",(req,res)=>{
//     res.send("AboutPage")
// })

// app.get("*",(req,res)=>{
//     res.send("404")
// })
// app.listen(3000)


//l80

// const express = require("express")
// const app = express()
// const session = require('express-session')

// app.use(session(
//     {
//         secret:"random stuff",
//         resave:false,
//         saveUnitialize:false 
//     }
// ))
// app.get("/",(req,res)=>{
//     req.session.name = "anish"
//     res.send("Home")
    
// })

// app.get("/checks",(req,res)=>{
//     console.log(req.session.name);
//     res.send("checkpage")
    
// })

// app.listen(3000)    





//l85

// const express = require("express")
// const app = express()



// app.get("/",(req,res)=>{
//     res.send("hi")
// })

// app.get("/:user",(req,res)=>{
//     res.send("hi"+" "+req.params.user)
// })

// app.listen(3000)  


///l86
// const express = require("express")
// const app = express()
// app.set("view engine","ejs")
// app.use(express.static('public'))

// app.get("/",(req,res)=>{
//     res.render("index")
// })



// app.listen(3000)  