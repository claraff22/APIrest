import {Request, Response} from 'express'
import db from '../database/db'

class Address {

    async insert(req: Request, res: Response) {
        const {street, house, cep, id_client} = req.body

        try {
            const response = await db.query('INSERT INTO address SET ? ', [street, house, cep, id_client])
            res.status(201).send(response)
        } catch (error) {
        console.log(error)
        }
    }
    
    async findAll(req: Request, res: Response) {
        try {
            const response = await db.query('SELECT * FROM address');
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async findOne(req: Request, res: Response) {
        const {id} = req.params
        try {
            const response = await db.query('SELECT address SET ? WHERE id = ?', [id]);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async update(req: Request, res: Response) {
        const {id} = req.params
        const {street, house, cep, id_client} = req.body

        try {
            const response = await db.query('UPDATE address SET ? WHERE id = ?', [street, house, cep, id_client, id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }

    }

    async delete(req: Request, res: Response) {
        const {id} = req.params

        try {
            const response = await db.query(`DELETE FROM address WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    } 
}

export default Address; 