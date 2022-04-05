var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')
// para tirar o primeiro numro do array
lines.shift()

let sumExperiments = 0
let totalRabbits = 0
let totalRats = 0
let totalFrogs = 0

for (let i = 0; i < lines.length; i++) {
  let experiment = lines[i].split(' ')
  sumExperiments = sumExperiments + Number(experiment[0])

  if (experiment[1] === 'C\r' || experiment[1] === 'C') {
    totalRabbits = totalRabbits + Number(experiment[0])
  } else if (experiment[1] === 'R\r' || experiment[1] === 'R') {
    totalRats = totalRats + Number(experiment[0])
  } else if (experiment[1] === 'S\r' || experiment[1] === 'S') {
    totalFrogs = totalFrogs + Number(experiment[0])
  }
}

var porcentageRabbits = (totalRabbits / sumExperiments) * 100
var porcentageRats = (totalRats / sumExperiments) * 100
var porcentageFrogs = (totalFrogs / sumExperiments) * 100

console.log(`Total: ${sumExperiments} cobaias`)
console.log(`Total de coelhos: ${totalRabbits}`)
console.log(`Total de ratos:  ${totalRats}`)
console.log(`Total de sapos: ${totalFrogs}`)

console.log(`Percentual de coelhos: ${porcentageRabbits.toFixed(2)} %`)
console.log(`Percentual de ratos:${porcentageRats.toFixed(2)} %`)
console.log(`Percentual de sapos: ${porcentageFrogs.toFixed(2)} %`)
