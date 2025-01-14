const express = require("express");
const path = require("path");
const fs = require("fs")
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Basic route
app.get("/", (req, res) => {
    fs.readdir("./hisaab", (err, files) => {
        // console.log(files);
        if (err) return res.status(500).send("somethingWentWrong")
        res.render("index", { files })

    })

});


app.get("/create", (req, res) => {
    res.render("create")
})




app.post("/createhisaab", (req, res) => {
    const currentDate = new Date();
    const date = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
    let fileCounter = 0;
    let filePath = `./hisaab/${date}.txt`;

    // Check for existing files and generate a unique filename
    while (fs.existsSync(filePath)) {
        fileCounter++;
        filePath = `./hisaab/${date}(${fileCounter}).txt`;
    }

    // Write the content to the unique file
    fs.writeFile(filePath, req.body.content, (err) => {
        if (err) {
            return res.send(err.message);
        }
        res.redirect("/");
    });
});



app.get("/edit/:filename", (req, res) => {
    fs.readFile(`./hisaab/${req.params.filename}.txt`, "utf-8", (err, data) => {
        if (err) {
            res.status(500).send(err.message)
        }
        res.render("edit", { filename: req.params.filename, data });


    })

})

app.post("/edit/:filename", (req, res) => {


    fs.writeFile(`./hisaab/${req.params.filename}.txt`, req.body.filedata, (err) => {
        if (err) {
            return res.status(500).send("Error writing file");
        }
        res.redirect("/"); // Redirect to homepage after successful edit
    });
});



app.get("/hisaab/:filename", (req, res) => {

    fs.readFile(`./hisaab/${req.params.filename}.txt`, "utf-8", (err, data) => {
        if (err) {
            res.status(500).send(err.message)
        }
        res.render("hisaab", { filename: req.params.filename, data });


    })
})



app.get("/delete/:filename", (req, res) => {

    fs.unlink(`./hisaab/${req.params.filename}.txt`, (err) => {
        if (err) {
            res.status(500).send(err.message)
        }
        res.redirect("/");


    })
})





// 404 handler
// app.use((req, res) => {
//     res.status(404).send("404 - Page not found");
// });





app.listen(3000);
