// In functional programming, functions should not give different outputs given the same inputs


// For this person, the age can be different than what was assigned
function Person (name, age) {
  this.name = name
  this.age = age
  this.birthday = () => {
    this.age++
  }
}

const person = new Person('cam', 24)
console.log(person.age)
person.birthday()
console.log(person.age)


// For this person, we get a new person every time their age increases
function FunctionalPerson (name, age) {
  this.name = name
  this.age = age
  this.birthday = () => new Person (this.name, this.age + 1)
}

const functionalPerson = new FunctionalPerson('functional cam', 24)
console.log(functionalPerson.age)
const olderCam = functionalPerson.birthday()
console.log(olderCam.age)
