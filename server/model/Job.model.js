const con = require('./connection');

class Job {
  static init() {
    const createJobTableQuery = `CREATE TABLE IF NOT EXISTS Job(
      jid INT AUTO_INCREMENT,
      addedBy INT NOT NULL,
      title VARCHAR(255),
      description VARCHAR(600),
      location VARCHAR(600),
      tags VARCHAR(255),
      PRIMARY KEY (jid),
      FOREIGN KEY (addedBy) REFERENCES Account(uid)
    )`;
    con.query(createJobTableQuery, (error) => {
      if (error) throw error;
    });
    return true;
  }

  static async create(jobData) {
    const query = `INSERT INTO Job (addedBy, title, description, location, tags) 
      VALUES (
        '${jobData.addedBy}', 
        '${jobData.title}',
        '${jobData.description}',
        '${jobData.location}',
        '${jobData.tags}'
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

module.exports = Job;
