const express = require('express');
const app = express();
const path = require('path');
const upload = require('./Multer-setup'); // Assuming this is your multer setup file
const fs = require('fs');
const userModel = require('./models/userModel'); // Make sure this points to your correct model

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Correct path joining

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (important!)

app.get('/', (req, res) => {
    res.render('index');    
});

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded');
        }

        const newUser = new userModel({
            name: req.body.name,
            image: req.file.buffer
        });

        await newUser.save();

        res.redirect('/uploaded');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error uploading file');
    }
});

app.get('/uploaded', async(req, res) => {
    

    const files = await userModel.find()
    console.log(files);
    res.render('upload', { files });


});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Connect to the database
const connectDB = require("./db/db");
connectDB();
