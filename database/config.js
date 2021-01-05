'user strict';

// const mysql = require('mysql');

// //local mysql db connection
// const connection = mysql.createConnection({
//     host     : process.env.DB_HOST,
//     port     : process.env.DB_PORT,
//     user     : process.env.DB_USERNAME,
//     password : process.env.DB_PASSWORD,
//     database : process.env.DB_DATABASE
// });
// // connect to database
// connection.connect(function(err) {
//     if (err) throw err;
// });

// module.exports = connection;

module.exports = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_DATABASE,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};