const con = require('./connection');

class Job {
  static init() {
    const createJobTableQuery = `CREATE TABLE IF NOT EXISTS Job(
      jid INT AUTO_INCREMENT,
      addedBy INT NOT NULL,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(600) NOT NULL,
      location VARCHAR(600) NOT NULL,
      tag VARCHAR(255) NOT NULL,
      PRIMARY KEY (jid),
      FOREIGN KEY (addedBy) REFERENCES Account(uid)
    )`;
    con.query(createJobTableQuery, (error) => {
      if (error) throw error;
    });
    return true;
  }

  static async create(jobData) {
    const query = `INSERT INTO Job (addedBy, title, description, location, tag) 
      VALUES (
        '${jobData.addedBy}', 
        '${jobData.title}',
        '${jobData.description}',
        '${jobData.location}',
        '${jobData.tag}'
      )
    `;
    const jid = await new Promise((resolve) => {
      con.query(query, (error, result) => {
        if (error) throw error;
        // id = result.insertId;
        resolve(result.insertId);
      });
    });
    return jid;
  }

  static async find(location, tag) {
    let query = `SELECT * FROM Job
    WHERE location = '${location}'`;
    if (tag) {
      query += ` AND tag='${tag}'`;
    }
    const jobs = await new Promise((resolve) => {
      con.query(query, (error, result) => {
        if (error) throw error;
        resolve(result);
      });
    });
    return jobs;
  }
}

module.exports = Job;
