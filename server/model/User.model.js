const con = require('./connection');

// User role:
//   # 0 - Admin
//   # 1 - Recruiter
//   # 2 - Candidate

class User {
  static init() {
    const createUserTableQuery = `CREATE TABLE IF NOT EXISTS User(
      uid INT NOT NULL,
      name VARCHAR(255),
      mobile INT CHECK (mobile > 6666666666 AND mobile < 9999999999),
      role INT CHECK (role IN (0, 1, 2)),
      address VARCHAR(600),
      FOREIGN KEY (uid) REFERENCES ACCOUNT(uid)
    )`;
    try {
      con.connect((conError) => {
        if (conError) throw conError;
        con.query(createUserTableQuery, (error) => {
          if (error) throw error;
        });
      });
      return true;
    } catch (e) {
      return null;
    }
  }

  static create(userData) {
    const query = `INSERT INTO User (uid, name, mobile, role, address) 
      VALUES (
        '${userData.uid}',
        '${userData.name}', 
        '${userData.mobile}',
        '${userData.role}',
        '${userData.address}'
      )
    `;
    try {
      let id = null;
      con.connect((conError) => {
        if (conError) throw conError;
        con.query(query, (error, result) => {
          if (error) throw error;
          id = result.insertId;
        });
      });
      return id;
    } catch (error) {
      return null;
    }
  }
}

module.exports = User;
