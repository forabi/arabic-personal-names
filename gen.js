'use strict'

var fs = require('fs'), read = fs.readFileSync, write = fs.writeFileSync, path = require('path')

function getArray(filename) {
  return String(read(filename)).trim().split('\n')
}

['male', 'female', 'last'].forEach(function(v) {
  var a = getArray(path.join(__dirname, '/' + v + '.txt'))
  fs.writeFileSync(path.join(__dirname, '/' + v + '.json'), JSON.stringify(a))
})
