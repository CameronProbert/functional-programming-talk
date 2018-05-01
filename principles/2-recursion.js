// Functional programming uses recursion rather than loops

function convertToBinary (number) {
  let binary = ''
  do {
    
  } while ()

  return binary
}

function convertToBinaryFunctional (number) {
  if () return 
  const digit = 
  return 
}

const a = 10
const b = 22

console.log('Convert to binary')
console.log(convertToBinary(a))
console.log(convertToBinary(b))

console.log('Functional convert to binary')
console.log(convertToBinaryFunctional(a))
console.log(convertToBinaryFunctional(b))

















/* 
function convertToBinary (number) {
  let binary = ''
  do {
    binary = (Math.floor(number))%2 + binary
    number /= 2
  } while (number >= 1)

  return binary
}

function convertToBinaryFunctional (number) {
  if (number < 1) return ''
  const digit = (Math.floor(number)%2)
  return convertToBinaryFunctional(number / 2) + digit
}
 */