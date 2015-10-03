var read = require('fs').readFileSync;

function getArray(filename) {
  return String(read(filename)).trim().split('\n')
}

var male = getArray('first.male.txt'),
  female = getArray('first.female.txt'),
  last = getArray('last.txt');

module.exports = {
  male: male,
  female: female,
  last: last
}
