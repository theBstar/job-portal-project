const con = require('./connection');

class Account {
  static init() {
    const createAccountTableQuery = `CREATE TABLE IF NOT EXISTS Account(
      uid INT AUTO_INCREMENT NOT NULL,
      email VARCHAR(255),
      password VARCHAR(255),
      token VARCHAR(16),
      PRIMARY KEY(uid)
    )`;
    con.query(createAccountTableQuery, (error) => {
      if (error) throw error;
    });
    return true;
  }

  static async create(accountData) {
    try {
      let id = null;
      const query = `INSERT INTO Account (email, password, token) 
      VALUES (
        '${accountData.email}', 
        '${accountData.password}',
        '${accountData.token}',
        )
    `;
      con.query(query, (error, result) => {
        if (error) throw error;
        id = result.insertId;
      });
      return id;
    } catch (e) {
      return null;
    }
  }

  static async findOneWithToken(token) {
    try {
      let user = null;
      const query = `SELECT * from Account
        WHERE token = '${token}'
      `;
      con.query(query, (err, result) => {
        if (err) throw err;
        user = result;
      });
      return user;
    } catch (e) {
      return null;
    }
  }

  static async findOne(email, password) {
    const query = `SELECT * FROM Account
    WHERE email = '${email}' AND password = '${password}'
    `;
    try {
      let user = null;
      con.query(query, (err, result) => {
        if (err) throw err;
        user = result;
      });
      return user;
    } catch (e) {
      return null;
    }
  }

  static async setToken(uid, token) {
    const query = `UPDATE Account
    SET token='${token}'
    WHERE uid='${uid}'
    `;

    try {
      let success = false;
      con.query(query, (err) => {
        if (err) throw err;
        success = true;
      });
      return success;
    } catch (e) {
      return false;
    }
  }
}

module.exports = Account;
