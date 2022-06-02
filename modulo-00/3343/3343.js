var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')
// numero de ataques
var firstLine = lines[0].split(' ')
//tamanho da muralha
var sizeOfTheWall = Number(firstLine[1])
// ordem dos ataques
var atackOrder = Array.from(lines[1])
// tamanho dos P, M, G
var sizeOfTheAtacks = lines[2].split(' ')

var totalDamage = 0

for (let i = 0; i < firstLine[0]; i++) {
  if (atackOrder[i] == 'P') {
    totalDamage += parseInt(sizeOfTheAtacks[0])
  } else if (atackOrder[i] == 'M') {
    totalDamage += parseInt(sizeOfTheAtacks[1])
  } else if (atackOrder[i] == 'G') {
    totalDamage += parseInt(sizeOfTheAtacks[2])
  }
}

let numberOfWalls = Math.ceil(totalDamage / sizeOfTheWall)

console.log(numberOfWalls)
