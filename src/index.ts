import express, {json, Request, Response} from 'express';
import { routerClient } from './controllers/routerClient';
import { routerAddress } from './controllers/routerAddress';
import { routerTypes } from './controllers/routerTypes';
import { routerIngredients } from './controllers/routerIngredient';
import { routerSales } from './controllers/routerSales';
import cors from 'cors'


const PORT = 3000;

const app = express()

app.use(json())
app.use(cors())

app.use('/clients', routerClient)
app.use('/address', routerAddress)
app.use('/types', routerTypes)
app.use('/ingredients', routerIngredients)
app.use('/sales', routerSales)

app.listen(PORT, () => console.log('Servidor funcionando na porta' + PORT));