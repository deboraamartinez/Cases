var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const [x1, y1] = lines[0].split(' ')
const [x2, y2] = lines[1].split(' ')

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

console.log(`${distance.toFixed(4)}`)
