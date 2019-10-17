const express = require('express');
const randtoken = require('rand-token');
const { Account, User, Candidate } = require('../model');


const router = express.Router();

// user
router.get('/:id', async (req, res) => {
  res.json({
    status: 'success',
    data: {
      ok: 'ok',
    },
  });
});

router.post('/new', async (req, res) => {
  // register a new user here
  let responseObject = {
    status: 'falied',
  };

  const user = res.body;
  if (user) {
    const token = randtoken.generate(16);
    const {
      firstName,
      lastName,
      email,
      password,
      userType,
      mobile,
      address,
    } = user;

    if ([firstName, lastName, email, password, userType, mobile, address].every((e) => e)) {
      if (userType.toLowerCase() === 'recruiter') {
        // register the recruiter
        const { possition, companyName } = user;
        if ([possition, companyName].every((e) => e)) {
          // do it here
        }
      } else {
        // register candidate
        const {
          dob, hieghestEducation, location, experience,
        } = user;
        if ([dob, hieghestEducation, location, experience].every((e) => e)) {
          const uid = await Account.create({
            email,
            password,
            token,
          });
          if (uid) {
            const isUserEntrySuccess = await User.create({
              uid,
              name: `${firstName} ${lastName}`,
              mobile,
              role: 2,
              address,
            });
            if (isUserEntrySuccess) {
              const isCandidateEntrySuccess = await Candidate.create({
                uid,
                dob,
                experience,
                hieghestEducation,
              });
              if (isCandidateEntrySuccess) {
                responseObject = {
                  status: 'success',
                };
              }
            }
          }
        }
      }
    }
  }
  res.json(responseObject);
});


module.exports = router;
