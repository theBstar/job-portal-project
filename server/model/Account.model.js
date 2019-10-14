const con = require('./initDB');

class Account {
  static init() {
    const createAccountTableQuery = `CREATE TABLE IF NOT EXISTS Account(
      uid INT AUTOINCREMENT NOT NULL,
      email VARCHAR(255),
      password VARCHAR(255),
      PRIMARY KEY(uid)
    )`;
    con.query(createAccountTableQuery, (error) => {
      if (error) throw error;
    });
    return true;
  }

  static create(accountData) {
    const query = `INSERT INTO Account (email, password) 
      VALUES ('${accountData.email}', '${accountData.password}')
    `;
    con.query(query, (error) => {
      if (error) throw error;
    });
    return true;
  }
}

module.exports = Account;
