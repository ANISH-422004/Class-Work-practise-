const {Router} = require("express")
const   router = Router()


router.get("/",(req,res)=>{
    res.send("Welcome To website")
})





module.exports=router

// In userRoutes.js: You create an instance of express.Router() to define your routes.
//Why Export? By exporting the router object using module.exports = router;, you make it available for import in other files. Without this export, other parts of your application wouldn't have access to the routes defined in userRoutes.js.
//In app.js: You import the router from userRoutes.js and tell your Express application to use it.
//How It Works: The app.use('/', userRoutes); line mounts the userRoutes router on the root path. This means any routes defined in userRoutes.js will be accessible from the root URL. For instance, the /profile route defined in userRoutes.js will be accessible at http://localhost:3000/profile.

//If you don't export the router object in your route file (e.g., userRoutes.js), the main application file (e.g., app.js) cannot access the routes defined in that file. This means that when you try to import the routes using require('./userRoutes'), it will return an empty object or undefined, leading to errors when the application attempts to use these routes. As a result, any HTTP requests to these routes will not be handled, and clients will receive 404 errors. Exporting the router object ensures that all defined routes are properly linked to the main application, allowing it to handle incoming requests as intended.
