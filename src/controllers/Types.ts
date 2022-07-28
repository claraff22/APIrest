import {Request, Response} from 'express'
import db from '../services/db'

class Types {

    async insert(req: Request, res: Response) {
        const {type, price} = req.body

        try {
            const response = await db.query('INSERT INTO types SET ? ', [type, price])
            res.status(201).send(response)
        } catch (error) {
        console.log(error)
        }
    }
    
    async findAll(req: Request, res: Response) {
        try {
            const response = await db.query('SELECT * FROM types');
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async findOne(req: Request, res: Response) {
        const {id} = req.params
        try {
            const response = await db.query('SELECT types SET ? WHERE id = ?', [id]);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async update(req: Request, res: Response) {
        const {id} = req.params
        const {type, price} = req.body

        try {
            const response = await db.query('UPDATE types SET ? WHERE id = ?', [type, price, id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }

    }

    async delete(req: Request, res: Response) {
        const {id} = req.params

        try {
            const response = await db.query(`DELETE FROM types WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    } 
}

export default Types; 