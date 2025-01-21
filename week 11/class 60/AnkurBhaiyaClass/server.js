// start server 
const app = require("./src/app")



app.listen(3000,()=>{
    console.log("Server Runnig On Port 3000")
})




// connct db 

const ConnectTODb = require("./src/db/db")
ConnectTODb()