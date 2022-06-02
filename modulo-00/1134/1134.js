var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let alcool = 0
let gasolina = 0
let diesel = 0

for (let i = 0; i < lines.length; i++) {
  let x = lines[i]
  if (x == 1) {
    alcool += 1
  } else if (x == 2) {
    gasolina += 1
  } else if (x == 3) {
    diesel += 1
  } else if (x == 4) {
    break
  }
}

console.log(`MUITO OBRIGADO`)
console.log(`Alcool: ${alcool}`)
console.log(`Gasolina:${gasolina}`)
console.log(`Diesel: ${diesel}`)
