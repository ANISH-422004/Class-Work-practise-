const express = require("express");
const app = express();
const data = [1,2,3,4,5,6]
// Route definition
app.get("/", (req, res) => {
    res.send("working");
});

// Route that intentionally throws an error
app.get("/profile", (req, res, next) => {
    try {
        res.send(hey);  // This will throw a ReferenceError
    } catch (err) {
        next(err);  // Pass the error to the error-handling middleware
    }
});

app.get("/data",(req,res)=>{
    try {
        res.send(data)
        
    } catch (error) {
        next(error)
    }
})


app.get("/data/:number" ,(req,res)=>{
    try {
        // console.log(typeof(req.params.number),req.params.number); // string  '2'
        // res.send("working")
        let a = Number(req.params.number)
        data.push(a)
        // console.log(data);
        
        res.send(data)
   
        

    } catch (err) {
        
    }
})




// Error-handling middleware
app.use((err, req, res, next) => {
    res.status(500).send(`Error: ${err.message}`);
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
