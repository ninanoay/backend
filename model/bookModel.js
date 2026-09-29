import pool from '../cnnfig/db.js';

//Retrieve
export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM book");
    return rows;
};