# Redis for Beginners

## Introduction
Redis (Remote Dictionary Server) is an open-source, in-memory data structure store used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, and more. Redis is known for its speed, flexibility, and ease of use.

## Why Use Redis?
- **Blazing Fast:** Operates in-memory, making it much faster than traditional databases.
- **Persistence Options:** Can persist data on disk for durability.
- **Rich Data Structures:** Supports multiple data types.
- **Replication:** Supports master-slave replication.
- **Pub/Sub Messaging:** Can be used as a message broker.
- **Atomic Operations:** All operations in Redis are atomic.
- **Scalability:** Supports partitioning for large-scale applications.

## Installation
### Installing Redis on Linux (Ubuntu/Debian)
```sh
sudo apt update
sudo apt install redis-server -y
```

### Installing Redis on macOS
```sh
brew install redis
```

### Installing Redis on Windows
Redis does not officially support Windows, but you can use WSL (Windows Subsystem for Linux) or Docker:
```sh
wsl --install
sudo apt install redis-server -y
```

## Using Redis with Node.js

### Installing Redis Client
To use Redis with Node.js, install the Redis package:
```sh
npm install redis
```

### Creating a Redis Client
```javascript
const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => console.log('Connected to Redis'));
client.on('error', (err) => console.error('Redis error:', err));
```

## Detailed Explanation of Common Redis Methods in Node.js

### `SET` - Store a key-value pair
```javascript
client.set('name', 'Alice', (err, reply) => {
  if (err) console.error(err);
  console.log(reply); // OK
});
```
**Use Case:** Storing small amounts of frequently accessed data.

### `SETEX` - Store a key with expiration
```javascript
client.setex('temp', 60, 'Temporary Value', (err, reply) => {
  console.log(reply); // OK
});
```
**Use Case:** Caching session data or temporary values.

### `GET` - Retrieve a value
```javascript
client.get('name', (err, reply) => {
  if (err) console.error(err);
  console.log(reply); // Alice
});
```
**Use Case:** Fetching stored key values.

### `DEL` - Delete a key
```javascript
client.del('name', (err, reply) => {
  console.log(reply); // 1 (number of deleted keys)
});
```
**Use Case:** Removing expired or unnecessary data.

### Saving Objects in Redis
Redis only stores string values, so when saving an object, you need to convert it to JSON:
```javascript
const user = { name: 'Alice', age: 25 };
client.set('user:1', JSON.stringify(user), (err, reply) => {
  console.log(reply); // OK
});
```
To retrieve and parse it back:
```javascript
client.get('user:1', (err, reply) => {
  if (reply) {
    console.log(JSON.parse(reply));
  }
});
```
**Key Notes:**
- Always use `JSON.stringify()` before storing objects.
- Use `JSON.parse()` when retrieving objects.
- Avoid storing large objects, as Redis is an in-memory store.

## Basic Redis Exercise with Node.js
### Express and Redis Integration Example
```javascript
const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const userModel = require("./models/user.model");

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/RedisPractise")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Redis connection
const client = redis.createClient({
    username: 'default',
    password: 'your_redis_password',
    socket: {
        host: 'your_redis_host',
        port: your_redis_port
    }
});
client.on("connect", () => {
    console.log("Connected to Redis");
});
client.connect();

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Creating user
app.post('/create', async (req, res) => {
    const { name, email, password } = req.body;
    await userModel.create({ name, email, password });
    res.send(req.body);
});

// Caching user data in Redis
app.get("/user/:id", async (req, res) => {
    try {
        let cachedData = await client.get(`user:profile:${req.params.id}`);
        if (cachedData) {
            console.log("Cached data sent");
            return res.send(JSON.parse(cachedData));
        }
        const user = await userModel.findOne({ _id: req.params.id });
        await client.set(`user:profile:${user._id}`, JSON.stringify(user));
        res.send(user);
        console.log("DB sent the data");
    } catch (error) {
        console.log(error);
    }
});

// Setting data with expiration
app.get("/cache-setex", async (req, res) => {
    await client.setex("session", 60, "temporary session data");
    res.send("Session data stored with expiry");
});

// Deleting cache key
app.get("/cache-del", async (req, res) => {
    await client.del("session");
    res.send("Session data deleted");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```

## Step-by-Step Explanation
1. **Set up Express and connect MongoDB and Redis.**
2. **Create an endpoint to save user data into MongoDB.**
3. **Implement Redis caching for fetching user data.**
4. **Use `SETEX` to store temporary session data with expiry.**
5. **Provide a route to delete session data from Redis.**

## Conclusion
Redis is a powerful tool for caching, real-time analytics, and high-performance applications. Integrating Redis with Node.js can significantly enhance application performance by reducing database queries and leveraging fast in-memory storage.

---
**Next Steps:**
- Explore Redis data structures in-depth.
- Learn Redis clustering for horizontal scaling.
- Implement Redis in full-stack applications.

