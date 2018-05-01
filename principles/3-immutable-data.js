// In functional programming, functions do not change the state of the program

const obj = { name: 'bob', pet: 'cat' }

function changeObject(obj) {
  obj.pet = 'dog'
}

function changeObjectFunctional (obj) {
  return { ...obj, pet: 'dog' }
}

console.log('Calling functional programming fn')
changeObjectFunctional(obj) // OK to delete
console.log(obj)

console.log('Calling imperative style programming fn')
changeObject(obj)
console.log(obj)
