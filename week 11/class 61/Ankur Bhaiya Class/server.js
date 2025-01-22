//Run server
const app = require("./src/app")
app.listen(3000,()=>{
    console.log("Server Running on port 3000")
})


// Db connect
const connect = require("./src/db/db")()