//express config
    // middlewares
    //cookies
    //session
    
    //routes
      // /   --> index.controller.js  will hold all controllers related to home page
      // /products  --> products.controller.js  will hold all controllers related to product actions  
      // /posts   --> posts.controller.js  will hold all controllers related to posts actions
      // /users  --> users.controller.js  will hold all controllers related to user action (example :  /user/auth , /user/create , user/loging , user/editprofile    ....   )


    
const express = require("express")
const app = express()
// const controller  = require("./controllers/index.controller")
// const userController = require("./controllers/user.controller")
const indexroutes = require("./routes/index.routes")
const userRoutes = require("./routes/user.routes")

app.use("/" , indexroutes)
app.use("/user",userRoutes)//http://localhost:3000/user === http://localhost:3000/user/  ==> /    forwarded to userRoutes
                          //http://localhost:3000/user/status  ==> /status      to forwarded to userRoutes        



// app.get("/",controller.indexControllers)
// app.get("/about",controller.aboutControllers)
// app.get("/user",userController.getProfile)




module.exports = app