const express = require('express');
const router = express.Router();
// const axios = require('axios');



// DOOR BELL ----------------------------------
router.post('/doorknob', (req, res) => {
  console.log(`[@visitor.js] Door Bell Ring`);
  console.log(req.body.ipv4);
  res.json({ greeting: "hello, server listening." });
})



module.exports = router;