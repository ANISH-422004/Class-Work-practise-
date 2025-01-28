//start server
require('dotenv').config()
const app = require("./src/app")

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


//connsct to mongoDB
const connnect = require("./src/db/db")
connnect(); 