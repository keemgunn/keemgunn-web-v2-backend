const express = require('express');
const router = express.Router();
const { generateCliVendorToken } = require('../modules/heimdall');
const { logg } = require('../modules/logger');

// DOOR BELL ----------------------------------
router.post('/doorknob', (req, res) => {
  logg(`[@visitor.js] Door Bell Ring:`, req.body.ipv4);
  const contentsToken = generateCliVendorToken();
  res.json({
    greeting: "hello, server listening.",
    contentsToken
  });
})


module.exports = router;