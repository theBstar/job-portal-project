const express = require('express');

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


module.exports = router;
