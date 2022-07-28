import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config();

export async function connect() {
    const connection = createPool({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
        connectionLimit: 10,
    });

    return connection;
}

