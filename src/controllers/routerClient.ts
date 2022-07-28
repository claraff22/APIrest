import express from "express";
import Clients from '../services/Clients';

const routerClient = express.Router();

const clients = new Clients();

routerClient.post('/insert', clients.insert);
routerClient.patch('/update/:id', clients.update);
routerClient.get('/', clients.findAll);
routerClient.get('/:id', clients.findOne);
routerClient.delete('/:id', clients.delete);

export {routerClient};
