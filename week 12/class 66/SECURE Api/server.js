//start server
const app = require("./src/app")


app.listen(3000, ()=>{
    console.log("Server Running on port 3000");
    
})



//connect to DataBase
const connect = require("./src/db/db")
connect()