import {Request, Response} from 'express'
import db from '../database/db'

class Ingredients {

    async insert (req: Request, res: Response) {
        const {basic, special, id_type} = req.body

        try {
            const response = await db.query('INSERT INTO ingredients SET ? ', [basic, special, id_type])
            res.status(201).send(response)
        } catch (error) {
        console.log(error)
        }
    }

    async findAll (req: Request, res: Response) {
        try {
            const response = await db.query('SELECT * FROM ingredients');
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async findOne (req: Request, res: Response) {
        const {id} = req.params
        try {
            const response = await db.query('SELECT ingredients SET ? WHERE id = ?', [id]);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async update (req: Request, res: Response) {
        const {id} = req.params
        const {basic, special, id_type} = req.body

        try {
            const response = await db.query('UPDATE ingredients SET ? WHERE id = ?', [basic, special, id_type, id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async delete (req: Request, res: Response) {
        const {id} = req.params

        try {
            const response = await db.query(`DELETE FROM ingredients WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

}

export default Ingredients