const express = require('express');
const router = express.Router();
const heimdall = require('../modules/heimdall');
const vault = { ticket: "" };

// LINK REQUEST -------------------------------
router.post('/link-request', (req, res) => {
  console.log(`[@vendor.js] LINK REQUEST DETECTED`);
  vault.ticket = heimdall.generateToken(heimdall.providerKey, req.body.key_B);
  res.json({ message: "[@PROVIDER_SERVER] TOKEN GENERATED", key_A: heimdall.providerKey });
  console.log('[@vendor.js] TOKEN GENERATED');
})


module.exports = vault;
module.exports = router;