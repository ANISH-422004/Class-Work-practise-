const mongoose = require("mongoose")

const connect = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => { console.log("connected to database") }).catch((e) => { console.log(`error connecting to dataBase`) })
}

module.exports = connect