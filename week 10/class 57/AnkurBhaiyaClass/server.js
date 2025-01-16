//start server 
const app = require("./src/app")



app.listen(3000)



// connect database

require("./src/db/db")