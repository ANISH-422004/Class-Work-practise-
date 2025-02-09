const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const RecipeModel = mongoose.model('Recipe', recipeSchema);

module.exports = RecipeModel;