const express = require('express');
const UserRouter = require('./routes/user.routes');
const { query } = require('express-validator');
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/user', UserRouter);

app.get('/', (req, res) => {
    res.send("homePage");
});

app.listen(3000, () => {
    console.log("server listening on 3000");
});
