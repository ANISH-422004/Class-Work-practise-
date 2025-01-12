const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.get("/",(req,res)=>{
    fs.readdir("./files",(err,files)=>{
        res.render("index",{files})
    })
})



app.get("/create", (req, res) => {
    const date = new Date();

    // Extract day, month, and year
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // Add leading zero if day or month is less than 10
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;

    const filename = `${day}-${month}-${year}.txt`;
    const folderPath = path.join(__dirname, "files");
    const filePath = path.join(folderPath, filename);

    // Ensure the 'files' directory exists
    fs.mkdir(folderPath, { recursive: true }, (err) => {
        if (err) {
            return res.render("index", { message: "Error creating directory" });
        }

        // Write to the file
        fs.writeFile(filePath, "File created successfully", (err) => {
            if (err) {
                return res.render("index", { message: "Something went wrong while writing the file" });
            }

            console.log("File created:", filename);
            res.send("created")
            // res.render("index", { message: "File created successfully" });
        });
    });
});


app.get("/edit/:filename", (req, res) => {
    fs.readFile( `files/${req.params.filename}`, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }
        return res.render("edit", { filename: req.params.filename, data: data });
    });
});

app.post("/edit/:filename", (req, res) => {
    const filePath = path.join(__dirname, "files", req.params.filename);

    // Write updated data to the file
    fs.writeFile(filePath, req.body.filedata, (err) => {
        if (err) {
            return res.status(500).send("Error updating file");
        }
        res.redirect("/"); // Redirect after successful update
    });
});



app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
