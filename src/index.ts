import express, {json, Request, Response} from 'express';
import { routerClient } from './routes/routerClient';
import { routerAddress } from './routes/routerAddress';
import { routerTypes } from './routes/routerTypes';
import { routerIngredients } from './routes/routerIngredient';
import cors from 'cors'

const PORT = 3000;

const app = express()

app.use(json())
app.use(cors())

app.use('/', routerClient)
app.use('/', routerAddress)
app.use('/', routerTypes)
app.use('/', routerIngredients)

app.listen(PORT, () => console.log('Servidor funcionando na porta' + PORT));