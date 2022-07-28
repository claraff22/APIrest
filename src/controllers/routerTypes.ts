import express from "express";
import Types from '../services/Types'

const routerTypes = express.Router();

const types = new Types();

routerTypes.post('/insert', types.insert);
routerTypes.patch('/update/:id', types.update);
routerTypes.get('/', types.findAll);
routerTypes.get('/:id', types.findOne);
routerTypes.delete('/:id', types.delete);

export {routerTypes};