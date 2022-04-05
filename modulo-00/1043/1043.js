var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ')

var A = Number(lines.shift())
var B = Number(lines.shift())
var C = Number(lines.shift())
if (A + B > C && A - B < C) {
  console.log(`Perimetro = ${(A + B + C).toFixed(1)}`)
} else {
  const area = ((A + B) / 2.0) * C
  console.log(`Àrea = ${area.toFixed(1)}`)
}
