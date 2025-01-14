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

app.use("/" , indexroutes)
// app.get("/",controller.indexControllers)
// app.get("/about",controller.aboutControllers)
// app.get("/user",userController.getProfile)




module.exports = app