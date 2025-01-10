import pg from 'pg';
const { Pool } = pg;

export const db = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'employee_tracker',
    password: 'your_password',
    port: 5432,
});