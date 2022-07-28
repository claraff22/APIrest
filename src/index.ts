import express, {Request, Response} from 'express';
import { routerClient } from './routes/routerClient';

const PORT = 3000;

const app = express();

app.use('/clients', routerClient)

app.listen(PORT, () => console.log('Servidor funcionando na porta' + PORT));