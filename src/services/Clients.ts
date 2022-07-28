import { Request, Response} from 'express'
import { connect } from '../database/db';


class Clients {

    async insert(req: Request, res: Response) {
        const {name, amount} = req.body
        const conn = await connect()
        try {
            const response = await conn.query('INSERT INTO clients (name, amount) VALUES (?,?) ', [name, amount])
            res.status(201).send(response)

        } catch (error) {
            console.log(error)
        }
    }
    
    async findAll(req: Request, res: Response) {
        const conn = await connect()
        try {
            const response =  await conn.query('SELECT * FROM clients');
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async findOne(req: Request, res: Response) {
        const {id} = req.params
        const conn = await connect()
        try {
            const response = await conn.query('SELECT * FROM clients WHERE id = ?', [id]);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async update(req: Request, res: Response) {
        const {id} = req.params
        const {name, amount} = req.body
        const conn = await connect()

        try {
            const response = await conn.query('UPDATE clients SET (name, amount) VALUES (?,?) WHERE id = ?', [name, amount, id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }

    }

    async delete(req: Request, res: Response) {
        const {id} = req.params
        const conn = await connect()

        try {
            const response = await conn.query('DELETE FROM clients WHERE id = ?', [id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    } 
}

export default Clients; 