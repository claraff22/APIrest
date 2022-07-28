import { createPool} from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config();

const pool = createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    port: Number(process.env.DATABASE_PORT)
});

export default pool;