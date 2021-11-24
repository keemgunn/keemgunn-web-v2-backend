function getTimeStamp() {
  const opt = new Intl.DateTimeFormat('en-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    hourCycle: 'h24',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
  const currentTime = opt.format(new Date());
  const split = currentTime.split(' ');
  const dates = split[1].split('/');
  const result = [
    [dates[2].replace(',', ''), dates[0], dates[1]].join('-'),
    split[0].replace(',', ''),
    split[2],
    split[3]
  ]
  return result.join(' ')
}


function getTimeStampRaw() {
  return Date,now()
}


module.exports.getTimeStamp = getTimeStamp;
module.exports.getTimeStampRaw = getTimeStampRaw;