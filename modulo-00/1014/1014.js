var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var X = parseFloat(lines.shift())
var Y = parseFloat(lines.shift())

const media = X / Y

console.log(`${media.toFixed(3)} km/l`)
