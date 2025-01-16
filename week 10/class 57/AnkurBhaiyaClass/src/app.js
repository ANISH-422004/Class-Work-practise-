const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.routes");

app.set("view engine", "ejs");
app.set("views", "./src/views");

// Middleware to parse incoming request bodies (useful for forms, JSON, etc.)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mount the index routes
app.use("/", indexRoutes);

module.exports = app;
