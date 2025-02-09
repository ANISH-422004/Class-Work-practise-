const app =require("./src/app")
const config =require("./src/config/config")
app.listen(config.PORT,()=>{
    console.log("Runnig on Port " + config.PORT)
})


//connect to database
const connect = require("./src/db/db")
connect()
