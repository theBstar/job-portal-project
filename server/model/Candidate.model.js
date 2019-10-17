const con = require('./connection');

class Candidate {
  static init() {
    const createCandidateTableQuery = `CREATE TABLE IF NOT EXISTS Candidate(
      uid INT NOT NULL,
      dob DATE,
      experience INT,
      highestEducation VARCHAR(255),
      FOREIGN KEY (uid) REFERENCES ACCOUNT(uid)
    )`;
    con.query(createCandidateTableQuery, (error) => {
      if (error) throw error;
    });
    return true;
  }

  static async create(candidateData) {
    const query = `INSERT INTO Candidate (uid, dob, experience, highestEducation) 
      VALUES (
        '${candidateData.uid}', 
        '${candidateData.dob}',
        '${candidateData.experience}',
        '${candidateData.highestEducation}'
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

module.exports = Candidate;
