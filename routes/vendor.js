const express = require('express');
const router = express.Router();
const { getCliKey } = require('../modules/heimdall');
const { logg } = require('../modules/logger');

// LINK REQUEST -------------------------------
router.get('/request-cli-key', (req, res) => {
  logg(`[@vendor.js] CLI KEY REQUEST DETECTED`);
  res.json({
    message: "[@CLI_SERVER] CLI KEY RESPONSED",
    cli_key: getCliKey()
  });
  logg(`[@vendor.js] CLI KEY REQUEST SERVED : ${getCliKey()}`);
})


module.exports = router;