// Functional programming uses recursion rather than loops

function convertToBinary (number) {
  let binary = ''
  do {
    binary = (Math.floor(number))%2 + binary
    number /= 2
  } while (number >= 1)

  return binary
}

function convertToBinaryFP (number) {
  if (number < 1) return ''
  const digit = (Math.floor(number)%2)
  return convertToBinaryFP(number / 2) + digit
}

const a = 10
const b = 22

console.log('Convert to binary')
console.log(convertToBinary(a))
console.log(convertToBinary(b))

console.log('Functional convert to binary')
console.log(convertToBinaryFP(a))
console.log(convertToBinaryFP(b))