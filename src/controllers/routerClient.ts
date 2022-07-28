import express from "express";
import Clients from '../services/Clients';

const routerClient = express.Router();

const clients = new Clients();

routerClient.post('/clients/insert', clients.insert);
routerClient.patch('/clients/update/:id', clients.update);
routerClient.get('/clients', clients.findAll);
routerClient.get('/clients/:id', clients.findOne);
routerClient.delete('/clients/:id', clients.delete);

export {routerClient};
