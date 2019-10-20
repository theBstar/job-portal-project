const con = require('./connection');

class Candidate {
  static init() {
    const createCandidateTableQuery = `CREATE TABLE IF NOT EXISTS Candidate(
      uid INT NOT NULL UNIQUE,
      dob DATE NOT NULL,
      experience INT NOT NULL,
      highestEducation VARCHAR(255) NOT NULL,
      FOREIGN KEY (uid) REFERENCES Account(uid)
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

module.exports = Candidate;
