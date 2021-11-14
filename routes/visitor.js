const express = require('express');
const router = express.Router();
const { generateCliVendorToken } = require('../modules/heimdall');
// const axios = require('axios');

// DOOR BELL ----------------------------------
router.post('/doorknob', (req, res) => {
  console.log(`[@visitor.js] Door Bell Ring:`, req.body.ipv4);
  const contentsToken = generateCliVendorToken();
  res.json({
    greeting: "hello, server listening.",
    contentsToken
  });
})


module.exports = router;