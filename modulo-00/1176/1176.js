var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')
lines.shift()
var number = lines.map(Number)

let fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1

for (let i = 2; i < 60; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
}

for (let i = 0; i < number.length; i++) {
  console.log(
    'Fib (' + parseInt(number[i]) + ') = ' + parseInt(fibonacci[number[i]])
  )
}
