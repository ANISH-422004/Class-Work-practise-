// server start
const app = require('./src/app');
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})







//db connection// connect to data base
require('dotenv').config()
const connect= require('./src/db/db');

connect();