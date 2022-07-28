import express from "express";
import Address from '../services/Address';

const routerAddress = express.Router();

const adress = new Address();

routerAddress.post('/insert', adress.insert);
routerAddress.patch('/update/:id', adress.update);
routerAddress.get('/', adress.findAll);
routerAddress.get('/:id', adress.findOne);
routerAddress.delete('/:id', adress.delete);

export {routerAddress};