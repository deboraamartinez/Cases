var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

for (let i = 0; i <= 10; i++) {
  console.log(`N [${i}] = ` + lines)
  lines = lines * 2
}
