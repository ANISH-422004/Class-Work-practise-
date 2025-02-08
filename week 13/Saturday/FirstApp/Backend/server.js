const app =require("./src/app")


app.listen(3000,()=>{console.log("Running on port 3000")})




const connectDB = require("./src/db/db")()