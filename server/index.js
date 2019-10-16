const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { userRouter } = require('./controller');
const {
  Account,
  User,
  Candidate,
  Recruiter,
  Job,
  Application,
} = require('./model');
const con = require('./model/connection');

try {
  con.connect((err) => {
    if (err) throw err;

    Account.init();
    User.init();
    Candidate.init();
    Recruiter.init();
    Job.init();
    Application.init();
  });
} catch (e) {
  throw new Error(`Could not connect to database ${e}`);
}

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/user', userRouter);

app.get('/*', async (req, res) => {
  // console.log('Got a request');
  // todo: uncomment later
  // res.sendFile(path.resolve('./client/build/index.html'));
  res.send('<h1>Hi from the app</h1>');
});

module.exports = app;
