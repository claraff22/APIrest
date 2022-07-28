import {Request, Response} from 'express'
import { connect } from '../database/db';

class Address {

    async insert(req: Request, res: Response) {
        const {street, house, cep, id_client} = req.body
        const conn = await connect()

        try {
            const response = await conn.query('INSERT INTO address (street, house, cep, id_client) VALUES (?,?,?,?)  ', [street, house, cep, id_client])
            res.status(201).send(response)
        } catch (error) {
        console.log(error)
        }
    }
    
    async findAll(req: Request, res: Response) {
        const conn = await connect()

        try {
            const response = await conn.query('SELECT * FROM address');
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async findOne(req: Request, res: Response) {
        const {id} = req.params
        const conn = await connect()

        try {
            const response = await conn.query('SELECT * FROM  address WHERE id = ?', [id]);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async update(req: Request, res: Response) {
        const {id} = req.params
        const {street, house, cep, id_client} = req.body
        const conn = await connect()

        try {
            const response = await conn.query('UPDATE address SET ? WHERE id = ?', [street, house, cep, id_client, id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }

    }

    async delete(req: Request, res: Response) {
        const {id} = req.params
        const conn = await connect()

        try {
            const response = await conn.query('DELETE FROM address WHERE id = ?', [id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    } 
}

export default Address; 