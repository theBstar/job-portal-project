const con = require('./connection');

class Application {
  static init() {
    const createApplicationTableQuery = `CREATE TABLE IF NOT EXISTS Application(
      jid INT NOT NULL,
      uid INT NOT NULL,
      status INT CHECK (status IN (0, 1, 2)),
      FOREIGN KEY (uid) REFERENCES ACCOUNT(uid),
      FOREIGN KEY (jid) REFERENCES Job(jid)
    )`;
    con.query(createApplicationTableQuery, (error) => {
      if (error) throw error;
    });
    return true;
  }

  static create(applicationData) {
    const query = `INSERT INTO Application (jid, uid, status) 
      VALUES (
        '${applicationData.jid}', 
        '${applicationData.uid}',
        '${applicationData.status}',
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

module.exports = Application;
