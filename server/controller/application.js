const express = require('express');
const {
  MSG_INTERNAL_ERROR,
  MSG_DATA_INSUFFICIENT_ERROR,
  MSG_INVALID_CREDS,
} = require('../constants/statusMessage');
const Account = require('../model/Account');
const Application = require('../model/Application');

const router = express.Router();

// application routes

router.post('/new', async (req, res) => {
  const responseObject = {
    status: 'failed',
    message: MSG_INTERNAL_ERROR,
  };
  try {
    const { authorization: token } = req.headers;
    if (!token) throw Error(MSG_DATA_INSUFFICIENT_ERROR);
    const account = await Account.findOneWithToken(token);
    if (!account) throw Error(MSG_INVALID_CREDS);

    const { jid } = req.body;

    const applicationId = await Application.create({
      jid, uid: account.uid, status: 0,
    });
    if (!applicationId && applicationId !== 0) throw Error(MSG_INTERNAL_ERROR);

    responseObject.status = 'success';
    responseObject.message = '';
  } catch (e) {
    responseObject.status = 'failed';
    responseObject.message = e.message;
  } finally {
    res.json(responseObject);
  }
});

// router.put('/:id', async (req, res) => {
//   // update application status
// });

module.exports = router;
