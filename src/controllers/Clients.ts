import {Request, Response} from 'express'
import db from '../services/db'
class Clients {
    async insert(req: Request, res: Response) {
        const {name, amount} = req.body

        try {
            const response = await db.query('INSERT INTO clients SET ? ', [name, amount])
            res.status(201).send(response)
        } catch (error) {
        console.log(error)
        }
    }
    async update(req: Request, res: Response) {}
    async findAll(req: Request, res: Response) {}
    async findOne(req: Request, res: Response) {}
    async delete(req: Request, res: Response) {} 
}

export default Clients; 