import express, {json, Request, Response} from 'express';
import { routerClient } from './routes/routerClient';
import cors from 'cors'

const PORT = 3000;

const app = express()

app.use(express.json())
app.use(cors())

app.use(routerClient)

app.listen(PORT, () => console.log('Servidor funcionando na porta' + PORT));