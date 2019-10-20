const con = require('./connection');

class Application {
  static init() {
    const createApplicationTableQuery = `CREATE TABLE IF NOT EXISTS Application(
      jid INT NOT NULL,
      uid INT NOT NULL,
      status INT NOT NULL,
      FOREIGN KEY (uid) REFERENCES Account(uid),
      FOREIGN KEY (jid) REFERENCES Job(jid)
    )`;
    con.query(createApplicationTableQuery, (error) => {
      if (error) throw error;
    });
    return true;
  }

  static async create(applicationData) {
    const query = `INSERT INTO Application (jid, uid, status) 
      VALUES (
        '${applicationData.jid}', 
        '${applicationData.uid}',
        '${applicationData.status}'
      )
    `;

    const applicationId = await new Promise((resolve) => {
      con.query(query, (error, result) => {
        if (error) throw error;
        // id = result.insertId;
        resolve(result.insertId);
      });
    });
    return applicationId;
  }
}

module.exports = Application;
