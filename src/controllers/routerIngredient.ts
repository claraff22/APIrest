import express from "express";
import Ingredients from '../services/Ingredients'

const routerIngredients = express.Router();

const ingredients = new Ingredients();

routerIngredients.post('/insert', ingredients.insert);
routerIngredients.patch('/update/:id', ingredients.update);
routerIngredients.get('/', ingredients.findAll);
routerIngredients.get('/:id', ingredients.findOne);
routerIngredients.delete('/:id', ingredients.delete);

export {routerIngredients};