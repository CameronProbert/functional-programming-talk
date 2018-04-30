// Functional programming functions do not use variables from outside their scope

let stringA = "Hello"
let stringB = "there"

// Uses global variable
function addStrings () {
  return `${stringA} ${stringB}`
}

// Uses no global variables
function addStringsFP (parameter1, parameter2) {
  return `${parameter1} ${parameter2}`
}

console.log(addStrings())
console.log(addStringsFP(stringA, stringB))

stringA = 'Different'
stringB = 'now'

console.log(addStrings())
console.log(addStringsFP(stringA, stringB))

module.exports = {
  addStrings,
  addStringsFP
}
