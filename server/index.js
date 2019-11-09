const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
  userRouter,
  authRouter,
  accountRouter,
  jobRouter,
  adminRouter,
  recruiterRouter,
  applicationRouter,
} = require('./controller');

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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/account', accountRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/recruiter', recruiterRouter);
app.use('/job', jobRouter);
app.use('/admin', adminRouter);
app.use('/application', applicationRouter);

app.get('/*', async (req, res) => {
  // console.log('Got a request');
  // todo: uncomment later
  // res.sendFile(path.resolve('./client/build/index.html'));
  res.send('<h1>Hi from the app</h1>');
});


module.exports = function startServer(PORT) {
  app.listen(PORT, () => {
    process.stdout.write(`\n\n****** Server started on ${PORT} ********\n\n`);
  });
};
