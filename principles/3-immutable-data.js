// In functional programming, functions do not change the state of the program

const obj = { name: 'bob', pet: 'cat' }

// Changes the pet of the object
function changePet(obj) {
  obj.pet = 'dog'
}

// Returns a new object with a changed pet
function changePetFunctional (obj) {
  return { ...obj, pet: 'fish' }
}

console.log('Calling functional programming fn')
console.log(changePetFunctional(obj))
changePetFunctional(obj) // OK to delete
console.log(obj)

console.log('Calling imperative style programming fn')
changePet(obj)
console.log(obj)
