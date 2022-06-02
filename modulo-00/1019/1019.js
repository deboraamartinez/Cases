var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const A = parseInt(lines.shift())

const hours = parseInt(A / 3600)
const minutes = parseInt((A - hours * 3600) / 60).toFixed(0)
const seconds = parseInt(A - hours * 3600 - minutes * 60).toFixed(0)

console.log(`${hours}:${minutes}:${seconds}`)
