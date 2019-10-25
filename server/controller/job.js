const express = require('express');
const {
  MSG_INTERNAL_ERROR,
  MSG_DATA_INSUFFICIENT_ERROR,
  MSG_INVALID_CREDS,
} = require('../constants/statusMessage');
const Account = require('../model/Account');

const router = express.Router;

// job routes

router.get('/', async (req, res) => {
  const responseObject = {
    status: 'failed',
    message: MSG_INTERNAL_ERROR,
    data: [],
  };
  try {
    const { token } = req.query;
    if (!token) throw Error(MSG_DATA_INSUFFICIENT_ERROR);
    const account = await Account.findOneWithToken(token);
    if (!account) throw Error(MSG_INVALID_CREDS);

  } catch (e) {
    responseObject.status = 'failed';
    responseObject.message = e.message;
  } finally {

  }
})

router.post('/new', async (req, res) => {
  // create new job
});

module.exports = router;
