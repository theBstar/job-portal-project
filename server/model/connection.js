const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'bikram',
  password: '9933',
  database: 'jobPortalProject',
});


module.exports = con;
