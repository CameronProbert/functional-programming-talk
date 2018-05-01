// A named function
function square (num) {
  return num * num
}

// An anonymous function (assigned to a variable). Often can't do this in imperative languages.
const double = num => num * 2

// Higher order functions allow for passing around of functions
const doThingTwice = fn => num => fn(fn(num))

// Square a number twice
console.log()

// Square a number twice, twice
console.log()

// Do a function four times
const doThingFourTimes = 

// Double a number four times (input 5 => 80)
console.log()

// Broken back down into one doThingTwice
console.log()

 // Or broken down completely:
 




















/* 
console.log((num => 
  square(square(((innerNum) => 
    square(square(innerNum))
  )(num)))
)(2))
 */