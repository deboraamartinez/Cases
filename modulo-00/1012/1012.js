var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())
var C = parseFloat(lines.shift())

const triangle = (A * C) / 2.0
const circle = C * C * 3.14159
const trapeze = ((A + B) * C) / 2.0
const square = B * B
const rectangle = A * B

console.log(`TRIANGULO:  ${triangle.toFixed(3)}`)
console.log(`CIRCULO:  ${circle.toFixed(3)}`)
console.log(`TRAPEZIO:  ${trapeze.toFixed(3)}`)
console.log(`QUADRADO:  ${square.toFixed(3)}`)
console.log(`RETÂNGULO:  ${rectangle.toFixed(3)}`)
