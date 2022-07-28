import express from "express";
import Ingredients from '../controllers/Ingredients'

const routerIngredients = express.Router();

const ingredients = new Ingredients();

routerIngredients.post('/ingredients/insert', ingredients.insert);
routerIngredients.patch('/ingredients/update/:id', ingredients.update);
routerIngredients.get('/ingredients', ingredients.findAll);
routerIngredients.get('/ingredients/:id', ingredients.findOne);
routerIngredients.delete('/ingredients/:id', ingredients.delete);

export {routerIngredients};