const { getTimeStamp } = require('./time');

function logg(...message) {
  console.log(`[${getTimeStamp()}]`, ...message);
}

module.exports.logg = logg;