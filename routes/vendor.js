const express = require('express');
const router = express.Router();
const { getCliKey } = require('../modules/heimdall');

// LINK REQUEST -------------------------------
router.get('/request-cli-key', (req, res) => {
  console.log(`[@vendor.js] CLI KEY REQUEST DETECTED`);
  res.json({
    message: "[@CLI_SERVER] CLI KEY RESPONSED",
    cli_key: getCliKey()
  });
  console.log(`[@vendor.js] CLI KEY REQUEST SERVED`);
})


module.exports = router;