const express = require('express');
const { add_recipe, fetch_recipes, update_recipe, remove_recipe } = require('../controller/recipeController');
const userAuthenticate = require('../middleware/userAuthenticate');

const recipeRoutes = express.Router();
recipeRoutes.post('/recipe/add', userAuthenticate, add_recipe)
recipeRoutes.get('/recipe', fetch_recipes)
recipeRoutes.get('/recipe/currentUser', userAuthenticate, fetch_recipes)
recipeRoutes.put('/recipe/:id', userAuthenticate, update_recipe)
recipeRoutes.delete('/recipe/:id', remove_recipe)

module.exports = recipeRoutes;