import express from "express";
import Sales from '../services/Sales'

const routerSales = express.Router();

const sales = new Sales();

routerSales.post('/insert', sales.insert);
routerSales.patch('/update/:id', sales.update);
routerSales.get('/', sales.findAll);
routerSales.get('/:id', sales.findOne);
routerSales.delete('/:id', sales.delete);

export {routerSales};