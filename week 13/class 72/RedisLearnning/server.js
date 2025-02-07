const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const userModel = require("./models/user.model")
const redis = require("redis")

// Middleware for parsing JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// MongoDB connection

mongoose.connect("mongodb://localhost:27017/RedisPractise")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//redis connextion
const client = redis.createClient({
    username: 'default',
    password: 'PHORa7OyOdZBHLnSRHOthMZwImz3tNk2',
    socket: {
        host: 'redis-19758.crce182.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 19758
    }
});

client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();






// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/create', async(req, res) => {
    const { name, email, password } = req.body
    await userModel.create({
        name,email,password
    })  
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});