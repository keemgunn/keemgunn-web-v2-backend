const fs = require('fs');
const axios = require('axios').default;
const jwt = require('jsonwebtoken');
const nanoid = require('nanoid');
const gen_nanoid = nanoid.customAlphabet('1234567890abcdef', 10);
const { logg } = require('./logger');

let cliVendorConfigs = {
  vendorURL: 'http://13.76.155.192',
  cliKey: 'cli-dev'
}

function getCliKey() {
  return cliVendorConfigs.cliKey
}

let vendorKey = '';
const vendorKeyPath = process.env.NODE_ENV === "development" ? "/Users/gunn/codespaces/auth/gunn-contents-server/vendor-key.txt" : "/heimdall/vendor-key.txt";
try {
  const data = fs.readFileSync(vendorKeyPath, 'utf8')
  vendorKey = data;
  logg(' - vendorKey Loaded - ');
} catch (err) {
  console.error(err);
}

async function checkContentsServer() {
  logg('[@heimdall.js] CHECKING CONTENTS SERVER...');
  axios({
    method: 'get',
    url: cliVendorConfigs.vendorURL + '/cli/isanyonethere',
    timeout: 2000,
  })
    .then((response) => {
      logg(response.data.message);
      requestCliKeyUpdate();
      setInterval(requestCliKeyUpdate, 21600000);
    })
    .catch((error) => {
      logg(error.message);
      axios.get('http://localhost:4433/cli/isanyonethere')
        .then((response) => {
          cliVendorConfigs.vendorURL = 'http://localhost:4433';
          logg(response.data.message, cliVendorConfigs.vendorURL);
          requestCliKeyUpdate();
          setInterval(requestCliKeyUpdate, 21600000);
        })
        .catch((error) => {
          logg(`[@heimdall.js] NO CONTENTS SERVER RUNNING...`);
        });
    });
}


function generateToken(key_A, key_B) {
  let result = jwt.sign(key_A, key_B);
  return result
}

function generateCliVendorToken() {
  return generateToken(cliVendorConfigs.cliKey, vendorKey);
}

async function requestCliKeyUpdate() {
  logg(`[@heimdall.js] TRYING CLI-KEY-UPDATE to ${cliVendorConfigs.vendorURL}`);
  cliVendorConfigs.cliKey = gen_nanoid();
  axios.post(cliVendorConfigs.vendorURL + '/cli/update-key', { cli_key: cliVendorConfigs.cliKey })
    .then(function (response) {
      logg(response.data.message);
    })
    .catch(function (error) {
      logg('[@heimdall.js] CLI-KEY-UPDATE FAILED :');
      logg(error.message);
    });
}


module.exports.checkContentsServer = checkContentsServer;
module.exports.generateCliVendorToken = generateCliVendorToken;
module.exports.getCliKey = getCliKey;