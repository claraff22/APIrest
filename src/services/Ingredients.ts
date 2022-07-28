import {Request, Response} from 'express'
import { connect } from '../database/db';

class Ingredients {

    async insert (req: Request, res: Response) {
        const {basic, special, fk_id_type} = req.body
        const conn = await connect()

        try {
            const response = await conn.query('INSERT INTO ingredients (basic, special, fk_id_type) VALUES (?,?,?)  ', [basic, special, fk_id_type])
            res.status(201).send(response)
        } catch (error) {
        console.log(error)
        }
    }

    async findAll (req: Request, res: Response) {
        const conn = await connect()

        try {
            const response = await conn.query('SELECT * FROM ingredients');
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async findOne (req: Request, res: Response) {
        const {id} = req.params
        const conn = await connect()

        try {
            const response = await conn.query('SELECT * FROM ingredients WHERE id = ?', [id]);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async update (req: Request, res: Response) {
        const {id} = req.params
        const {basic, special, id_type} = req.body
        const conn = await connect()

        try {
            const response = await conn.query('UPDATE ingredients SET ? WHERE id = ?', [basic, special, id_type, id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async delete (req: Request, res: Response) {
        const {id} = req.params
        const conn = await connect()

        try {
            const response = await conn.query('DELETE FROM ingredients WHERE id = ?', [id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

}

export default Ingredients