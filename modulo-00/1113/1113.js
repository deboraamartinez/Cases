var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

for (let i = 0; i < lines.length; i++) {
  let x = lines[i].split(' ')
  if (Number(x[0]) > Number(x[1])) {
    console.log('Decrescente')
  } else if (Number(x[0]) < Number(x[1])) {
    console.log('Crescente')
  } else if (Number(x[0]) == Number(x[1])) {
    break
  }
}
