var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var number = lines.map(Number)

for (let i = 1; i <= number; i++) {
  console.log(`${i * 4 - 3} ${i * 4 - 2} ${i * 4 - 1} PUM`)
}
