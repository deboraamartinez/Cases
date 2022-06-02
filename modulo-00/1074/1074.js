var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

//utiliza o shift para tirar o primeiro número do array
const valor = Number(lines.shift())

// fazer um for para ir pegando cada novo elemento do array

for (let i = 0; i < valor; i += 1) {
  if (lines[i] == 0) {
    console.log('NULL')
  } else if (lines[i] % 2 == 0 && lines[i] > 0) {
    console.log('EVEN POSITIVE')
  } else if (lines[i] % 2 == 0 && lines[i] < 0) {
    console.log('EVEN NEGATIVE')
  } else if (lines[i] % 2 != 0 && lines[i] > 0) {
    console.log('ODD POSITIVE')
  } else if (lines[i] % 2 != 0 && lines[i] < 0) {
    console.log('ODD NEGATIVE')
  }
}
