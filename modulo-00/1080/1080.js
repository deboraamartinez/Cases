var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var max = lines.map(Number).reduce(function (a, b) {
  return Math.max(a, b)
})
console.log(max)
var idx = lines.map(Number)
var index = idx.indexOf(max)
console.log(index + 1)
