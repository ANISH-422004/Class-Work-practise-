const app = require("./src/app")

app.listen(3000,()=>{
    console.log('Server runnig On port 3000')
})


const connect = require("./src/db/db")() 