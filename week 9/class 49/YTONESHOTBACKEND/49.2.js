const exp = require('constants');
const express = require('express');
const app = express();
const userModel = require('./models/user')
const dBconnection = require('./config/db')

app.use(express.urlencoded({ extended: true })); // Add this line to parse form data
app.use(express.json())
app.use(express.static('public'))



app.use((req, res, next) => {
    console.log(`requested url : ${req.url}`);
    return next();
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Hi");
});

app.get('/form', (req, res) => {
    res.render('index');
});
app.post('/get-form-data', (req, res) => {
    console.log("POST request received on /get-form-data");
    console.log("Request body:", req.body);
    res.send("Data sent");
});



app.get('/register', (req, res) => {
    res.render('register')
    // console.log(req.query);

})

app.post('/register', async (req, res) => {

    console.log(req.body);
    
    const { name, email, password } = req.body;
    await userModel.create({
        username: name,
        email: email,
        password: password
    })
    res.send("Form Submitted")
})


app.get('/get-users',(req,res)=>{
   userModel.find({username:"anish"}).then(
    (users)=>{
        res.send(users)
    }
   )
})

app.get('/update-user',async(req,res)=>{
    await userModel.findOneAndUpdate(
        {username : "anish"},
        {email  : "anish@gmail.com"}
    )
    res.send("user Updated")
})


app.get('/user-del',async(req,res)=>{
    await userModel.findOneAndDelete({
        username : "anish"
    })
    res.send("User Deleted")
})





app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
