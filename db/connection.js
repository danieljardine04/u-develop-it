const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        sqlpassword: 'G@rrettGS11',
        password: 'G@rrettGS11',
        database: 'election'

    },
    console.log('Connected to the election database.')
);

module.exports = db;