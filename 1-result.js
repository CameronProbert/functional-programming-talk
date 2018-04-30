// In functional programming, functions do not change the state of the program

const obj = { name: 'bob', pet: 'cat' }

function changeString(obj) {
  obj.pet = 'dog'
}

function changeStringFP (obj) {
  return { ...obj, pet: 'fish' }
}

changeStringFP(obj) // OK to delete

console.log(obj)

changeString(obj)

console.log(obj)
