const mongoose = require('mongoose');





const connect = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Connected to MongoDB successfully");

    })
        .catch((err) => {
            console.log("Error connecting to MongoDB");
            console.log(err);
        })
}

module.exports = connect;