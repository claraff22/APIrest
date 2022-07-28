import express from "express";
import Types from '../controllers/Types'

const routerTypes = express.Router();

const types = new Types();

routerTypes.post('/types/insert', types.insert);
routerTypes.patch('/types/update/:id', types.update);
routerTypes.get('/types', types.findAll);
routerTypes.get('/types/:id', types.findOne);
routerTypes.delete('/types/:id', types.delete);

export {routerTypes};