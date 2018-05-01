// In this case it looks as if we can test each function easily
// The two functions actually have different behaviour

// Imperative
function doubleElements (array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2
  }
  return array
}

// Declarative
function doubleElements (array) {
  return array.map(number => number * 2)
}