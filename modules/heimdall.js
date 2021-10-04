const jwt = require('jsonwebtoken');
const nanoid = require('nanoid');
const gen_nanoid = nanoid.customAlphabet('1234567890abcdef', 10)

const vault = {};
const providerKey = gen_nanoid();


function generateToken(key_A, key_B) {
  let result = jwt.sign(key_A, key_B);
  return result
}


function verify (token, keyB) {
  let key_A = jwt.verify(token, keyB, (err, decoded) => {
    if(err) {
      return { "result": 'not_varified' }
    }else {
      return { "result": decoded }
    }
  });
  return key_A
}


async function requestLink(providerURL, key_B) {
  let result
  console.log(`[@heimdall.js] TRYING PROVIDER-LINK`);
  axios.post(providerURL + '/vendor/link-request', { key_B })
  .then(function (response) {
    result = response.data;
    console.log('[@heimdall.js] LINK MADED');   
    console.log(result.message);
    ticket = generateToken(result.key_A, vendorKey);
    console.log('[@heimdall.js] TOKEN GENERATED');
    })
    .catch(function (error) {
      console.log('[@heimdall.js] LINK FAILED - ERROR:', error.code);
    });
  return result
}


module.exports.providerKey = providerKey;
module.exports.generateToken = generateToken;
module.exports.verify = verify;
module.exports.requestLink = requestLink;
module.exports.vault = vault;