var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var valor = Number(lines.shift())

for (var i = 1; i < 11; i++) {
  console.log(`${i} X ${valor} = ${valor * i}`)
}
