var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ')

var A = Number(lines.shift())
var B = Number(lines.shift())

let counter = 0
let string = ''

for (i = 1; i < B; i++) {
  counter += 1
  if (counter == A) {
    counter = 0
    string += `${i}\n`
  } else {
    string += `${i} `
  }
}
string += `${B}`
console.log(string)
