import {Request, Response} from 'express'
import { connect } from '../database/db';

class Sales {

    async insert(req: Request, res: Response) {
        const {id_customer, id_product} = req.body
        const conn = await connect()

        try {
            const response = await conn.query('INSERT INTO sales (id_customer, id_product) VALUES (?,?)  ', [id_customer, id_product])
            res.status(201).send(response)
        } catch (error) {
        console.log(error)
        }
    }
    
    async findAll(req: Request, res: Response) {
        const conn = await connect()

        try {
            const response = await conn.query('SELECT * FROM sales');
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async findOne(req: Request, res: Response) {
        const {id} = req.params
        const conn = await connect()

        try {
            const response = await conn.query('SELECT * FROM sales WHERE id = ?', [id]);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async update(req: Request, res: Response) {
        const {id} = req.params
        const {id_customer, id_product} = req.body
        const conn = await connect()

        try {
            const response = await conn.query('UPDATE sales SET ? WHERE id = ?', [id_customer, id_product, id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }

    }

    async delete(req: Request, res: Response) {
        const {id} = req.params
        const conn = await connect()

        try {
            const response = await conn.query('DELETE FROM sales WHERE id = ?', [id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    } 
}

export default Sales; 