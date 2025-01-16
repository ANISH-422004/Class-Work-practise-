const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0/kodr").then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.error("Error connecting to DB", err);
});

const driverSchema = mongoose.Schema({
    name: {
        type: String,  // Corrected to String (capital 'S')
    },
    email: {
        type: String,  // Corrected to String (capital 'S')
    },
    password: {
        type: String,  // Corrected to String (capital 'S')
    }
});

const driverModel = mongoose.model("driver", driverSchema);

module.exports = driverModel;
     