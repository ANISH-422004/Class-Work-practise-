const express = require('express');
const recipieControllers = require("../controllers/recipie.controller")
const router = express.Router();

// Define your routes here
router.post("/create",recipieControllers.createRecipie)
router.get("/allrecipe",recipieControllers.allrecipes)
router.get("/getArecipie/:id",recipieControllers.getArecipeController)
module.exports = router;