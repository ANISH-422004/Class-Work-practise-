const express = require('express');
const app = express();
const path = require('path');
const upload = require('./Multer-setup'); // Assuming this is your multer setup file
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Correct path joining

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (important!)

app.get('/', (req, res) => {
    res.render('index'); // Assuming you have an index.ejs file
});

app.post('/upload', upload.single('image'), (req, res) => {
    try {
        if (!req.file) { // Check if a file was actually uploaded
            return res.status(400).send('No file uploaded'); // Handle no file case
        }
        console.log(req.file);
        res.redirect('/uploaded'); // Redirect after successful upload to avoid form resubmission on refresh
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send('Error uploading file'); // Send an error response
    }
});


app.get('/uploaded', (req, res) => {
    const uploadDir = path.join(__dirname, 'public', 'images', 'uploads');

    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error("Error reading directory:", err); // Log the error
            return res.status(500).send('Error reading files.'); // Handle error
        }
        res.render('upload', { files: files || [] }); // Pass an empty array if no files exist to avoid errors in EJS
    });
});




app.listen(3000, () => {
    console.log('Server running on port 3000');
});

const connectDB = require("./db/db");
connectDB();
