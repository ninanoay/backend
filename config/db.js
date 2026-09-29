import mysql from 'mysql2/promise.js'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: "",
    datebase: 'librarydb'
})

export default pool;