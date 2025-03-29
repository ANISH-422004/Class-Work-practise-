const express = require('express');
const Redis = require("ioredis");

const app = express();
const port = 3000;

// Middleware function
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// Use middleware
app.use(loggerMiddleware);

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// Redis client (automatically connects)
const client = new Redis({

    password: 'PHORa7OyOdZBHLnSRHOthMZwImz3tNk2',   
    host: 'redis-19758.crce182.ap-south-1-1.ec2.redns.redis-cloud.com',
    port: 19758

});

client.on('connect', () => console.log("✅ Connected to Redis!"));
client.on('error', err => console.error("❌ Redis Client Error:", err));

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
