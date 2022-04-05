var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

number = Number(lines.shift())
// even impar odd par - lines[i] % 2 != 0
if (number % 2 == 0) {
  totalOdd = (number * number) / 2
  console.log(`${totalOdd} casas brancas e ${totalOdd} casas pretas`)
} else if (number % 2 != 0) {
  totalEvenBlack = ((number * number) / 2).toFixed(0) - 1
  totalEvenWhite = ((number * number) / 2).toFixed(0)
  console.log(
    `${totalEvenWhite} casas brancas e ${totalEvenBlack} casas pretas`
  )
}
