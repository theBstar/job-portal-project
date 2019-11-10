const mysql = require('mysql');

const dbURL = process.env.CLEAR_DB_URL || null;
const connectionOptions = {
  host: 'localhost',
  user: 'bikram',
  password: '9933',
  database: 'jobPortalProject',
};
const con = mysql.createConnection(dbURL || connectionOptions);


module.exports = con;
