// const mysql = require("mysql");

// const config = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE
// };

// const poolPromise = mysql.createPool(config);

// poolPromise.getConnection((err, connection) => {
//   if (err) {
//     console.error('Database Connection Failed! Bad Config: ', err);
//     return;
//   }
//   console.log('Connected to MySQL');
//   if (connection) connection.release();
// });

// module.exports = {
//     poolPromise
// };



const mysql = require('mysql2/promise');

const poolPromise = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const executeQuery = async (query) => {
    try {
        const connection = await poolPromise.getConnection();
        const [results] = await connection.query(query);
        connection.release();
        return results;
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw new Error(`Query execution error: ${error.message}`);
    }
};



module.exports = {
    executeQuery
}