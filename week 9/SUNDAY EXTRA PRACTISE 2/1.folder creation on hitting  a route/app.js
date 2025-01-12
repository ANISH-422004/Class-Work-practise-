const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
    res.send("HI");  

    const date = new Date();
    // Extract day, month, and year
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // Add leading zero if day or month is less than 10
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;

    const filename = `${day}-${month}-${year}.txt`;
    const filePath = path.join(__dirname, "files", filename);

    // Ensure the 'files' directory exists
    fs.mkdir(path.join(__dirname, "files"), { recursive: true }, (err) => {
        if (err) {
            return res.status(500).send("Error creating directory");
        }

        // Write to the file
        fs.writeFile(filePath, "File created successfully", (err) => {
            if (err) {
                return res.status(500).send("Something went wrong while writing the file");
            }
            console.log("File created:", filename);
            // res.send("File created successfully");
        });
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
