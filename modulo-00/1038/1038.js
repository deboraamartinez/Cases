var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const code = parseFloat(lines.shift())
const amount = parseFloat(lines.shift())

function snack(code, amount) {
  switch (code) {
    case 1:
      console.log(`Total: R$ ${(amount * 4.0).toFixed(2)}`)
      break
    case 2:
      console.log(`Total: R$ ${(amount * 4.5).toFixed(2)}`)
      break
    case 3:
      console.log(`Total: R$ ${(amount * 5.0).toFixed(2)}`)
      break
    case 4:
      console.log(`Total: R$ ${(amount * 2.0).toFixed(2)}`)
      break
    case 5:
      console.log(`Total: R$ ${(amount * 1.5).toFixed(2)}`)
      break
  }
}

snack(code, amount)
