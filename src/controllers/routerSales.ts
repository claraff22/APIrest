import express from "express";
import Sales from '../services/Sales'

const routerSales = express.Router();

const sales = new Sales();

routerSales.post('/sales/insert', sales.insert);
routerSales.patch('/sales/update/:id', sales.update);
routerSales.get('/sales', sales.findAll);
routerSales.get('/sales/:id', sales.findOne);
routerSales.delete('/sales/:id', sales.delete);

export {routerSales};