var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var number = Number(lines.shift())
var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
for (let i = 2; i < number; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
}

stringFibo = fibonacci.toString()

fiboFinal = stringFibo.replace(/,/g, ' ')

console.log(fiboFinal)
