const express = require('express');
const { Account } = require('../model');

const router = express.Router();

// auth
router.post('/login', async (req, res) => {
  // check for login method >> token or data.
  // payload method: token | data, data, token
  const { logiMethod, token, data } = res.body;
  if (logiMethod === 'token') {
    // do token login here
    const user = await Account.findOneWithToken(token);
    if (user) {
      // success
    } else {
      // failure
    }
  } else {
    // do data login here
    const user = await Account.findOne(data.email, data.password);
    if (user) {
      // success
    } else {
      // failure
    }
  }
});


module.exports = router;
