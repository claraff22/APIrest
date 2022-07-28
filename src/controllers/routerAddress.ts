import express from "express";
import Address from '../services/Address';

const routerAddress = express.Router();

const adress = new Address();

routerAddress.post('/adress/insert', adress.insert);
routerAddress.patch('/adress/update/:id', adress.update);
routerAddress.get('/adress', adress.findAll);
routerAddress.get('/adress/:id', adress.findOne);
routerAddress.delete('/adress/:id', adress.delete);

export {routerAddress};