const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'bikram',
  password: '9933',
  database: 'jobPortalProject',
});

// Recruiter status:
//   # 0 - not verified
//   # 1 - verified
//   # 2 - rejected

// Application status:
//   # 0 - applied
//   # 1 - accepted
//   # 2 - rejected

// User role:
//   # 0 - Admin
//   # 1 - Recruiter
//   # 2 - Candidate


// const createAccountTableQuery = `CREATE TABLE IF NOT EXISTS Account(
//   uid INT AUTOINCREMENT NOT NULL,
//   email VARCHAR(255),
//   password VARCHAR(255),
//   PRIMARY KEY(uid)
// )`;

// const createUserTableQuery = `CREATE TABLE IF NOT EXISTS User(
//   uid INT NOT NULL,
//   name VARCHAR(255),
//   mobile INT CHECK (mobile > 6666666666 AND mobile < 9999999999),
//   role INT CHECK (role IN (0, 1, 2)),
//   address VARCHAR(600),
//   FOREIGN KEY (uid) REFERENCES ACCOUNT(uid)
// )`;


// const createRecruiterTableQuery = `CREATE TABLE IF NOT EXISTS Recruiter(
//   uid INT NOT NULL,
//   position VARCHAR(255),
//   status INT CHECK (status IN (0, 1, 2)),
//   company VARCHAR(255),
//   FOREIGN KEY (uid) REFERENCES ACCOUNT(uid)
// )`;


// const createCandidateTableQuery = `CREATE TABLE IF NOT EXISTS Candidate(
//   uid INT NOT NULL,
//   dob DATE,
//   experience INT,
//   highestEducation VARCHAR(255),
//   FOREIGN KEY (uid) REFERENCES ACCOUNT(uid)
// )`;

const createJobTableQuery = `CREATE TABLE IF NOT EXISTS Job(
  jid INT AUTOINCREMENT,
  addedBy INT NOT NULL,
  title VARCHAR(255),
  description VARCHAR(600),
  location VARCHAR(600),
  tags VARCHAR(255),
  FOREIGN KEY (addedBy) REFERENCES ACCOUNT(uid)
)`;

const createApplicationTableQuery = `CREATE TABLE IF NOT EXISTS Application(
  jid INT NOT NULL,
  uid INT NOT NULL,
  status INT CHECK (status IN (0, 1, 2)),
  FOREIGN KEY (uid) REFERENCES ACCOUNT(uid),
  FOREIGN KEY (jid) REFERENCES Job(jid)
)`;

function initDb() {
  try {
    con.connect((err) => {
      if (err) throw err;
      // console.log("Connected!");

      // con.query(createAccountTableQuery, (error) => {
      //   if (error) throw error;
      // });

      // con.query(createUserTableQuery, (error) => {
      //   if (error) throw error;
      // });

      // con.query(createRecruiterTableQuery, (error) => {
      //   if (error) throw error;
      // });

      // con.query(createCandidateTableQuery, (error) => {
      //   if (error) throw error;
      // });
      con.query(createJobTableQuery, (error) => {
        if (error) throw error;
      });
      con.query(createApplicationTableQuery, (error) => {
        if (error) throw error;
      });
    });

    return con;
  } catch (error) {
    return null;
  }
}

module.exports = initDb();
