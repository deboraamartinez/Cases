var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var salary = Number(lines.shift())
const minimo = salary - 2000
const medio = (salary - 3000) * 0.18
const maximo = (salary - 4500) * 0.28

if (salary >= 0 && salary < 2000) {
  console.log(`Isento`)
} else if (salary >= 2000.1 && salary <= 3000) {
  console.log(`R$ ${(minimo * 0.08).toFixed(2)}`)
} else if (salary >= 3000.1 && salary < 4500) {
  console.log(`R$ ${(medio + 1000 * 0.08).toFixed(2)}`)
} else {
  console.log(`R$ ${(maximo + 1000 * 0.08 + 1500 * 0.18).toFixed(2)}`)
}
