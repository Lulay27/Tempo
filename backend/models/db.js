const mysql = require('mysql');
require('dotenv').config();

const dbConnection = () => {
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASS,
    database: 'tempoDB',
  });

  db.connect((error) => {
    if (error) {
      console.log(error);
    }
    console.log('connected to db');
  });

  return db;
};

module.exports = { dbConnection };
