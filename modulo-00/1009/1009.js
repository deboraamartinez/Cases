var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var nome = lines.shift()
var salary = parseInt(lines.shift())
var totalSale = parseInt(lines.shift())

const commission = totalSale * 0.15

const salaryTotal = salary + commission

console.log('TOTAL = R$ ' + salaryTotal.toFixed(2))
