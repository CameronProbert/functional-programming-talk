// Imperative - we tell the code how to do what we want
// We want to iterating through the array and set the elements to be equal to themselves * 2
// Then we want to return the array
function doubleElements (array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2
  }
  return array
}

// Declarative - we tell the code what we want
// We want to return an array where each element is the same as the original * 2
function doubleElements (array) {
  return array.map(number => number * 2)
}
