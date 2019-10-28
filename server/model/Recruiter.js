const con = require('./connection');

// Recruiter status:
//   # 0 - unverified
//   # 1 - active
//   # 2 - suspended
//   # 3 - rejected

class Recruiter {
  static init() {
    const createRecruiterTableQuery = `CREATE TABLE IF NOT EXISTS Recruiter(
      uid INT NOT NULL UNIQUE,
      position VARCHAR(255) NOT NULL,
      status INT NOT NULL,
      company VARCHAR(255) NOT NULL,
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

    const success = await new Promise((resolve) => {
      con.query(query, (error) => {
        if (error) throw error;
        // id = result.insertId;
        resolve(true);
      });
    });
    return success;
  }
}

module.exports = Recruiter;
