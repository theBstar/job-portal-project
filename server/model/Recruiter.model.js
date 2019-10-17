const con = require('./connection');

// Recruiter status:
//   # 0 - not verified
//   # 1 - verified
//   # 2 - rejected

class Recruiter {
  static init() {
    const createRecruiterTableQuery = `CREATE TABLE IF NOT EXISTS Recruiter(
      uid INT NOT NULL,
      position VARCHAR(255),
      status INT CHECK (status IN (0, 1, 2)),
      company VARCHAR(255),
      FOREIGN KEY (uid) REFERENCES Account(uid)
    )`;
    con.query(createRecruiterTableQuery, (error) => {
      if (error) throw error;
    });
    return true;
  }

  static async create(recruiterData) {
    const query = `INSERT INTO Recruiter (uid, position, status, company) 
      VALUES (
        '${recruiterData.uid}', 
        '${recruiterData.position}',
        '${recruiterData.status}',
        '${recruiterData.company}'
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

module.exports = Recruiter;
