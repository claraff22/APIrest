import {Request, Response} from 'express'
import { connect } from '../database/db';

class Types {

    async insert(req: Request, res: Response) {
        const {type, price} = req.body
        const conn = await connect()

        try {
            const response = await conn.query('INSERT INTO types (type, price) VALUES (?,?)  ', [type, price])
            res.status(201).send(response)
        } catch (error) {
        console.log(error)
        }
    }
    
    async findAll(req: Request, res: Response) {
        const conn = await connect()

        try {
            const response = await conn.query('SELECT * FROM types');
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async findOne(req: Request, res: Response) {
        const {id} = req.params
        const conn = await connect()

        try {
            const response = await conn.query('SELECT * FROM types WHERE id = ?', [id]);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async update(req: Request, res: Response) {
        const {id} = req.params
        const {type, price} = req.body
        const conn = await connect()

        try {
            const response = await conn.query('UPDATE types SET type = ?, price = ? WHERE id = ?', [type, price, id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }

    }

    async delete(req: Request, res: Response) {
        const {id} = req.params
        const conn = await connect()

        try {
            const response = await conn.query('DELETE FROM types WHERE id = ?', [id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    } 
}

export default Types; 