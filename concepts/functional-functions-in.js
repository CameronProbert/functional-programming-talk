const array = [2, 3, 5, 6, 9, 10, 11, 15]

// Reduce
const sum = array.reduce((prev, num) => prev + num)

// Map
const squared = array.map(num => num * num)

// Filter
const largeNums = array.filter(num => num >= 10)


console.log(`Original: ${array}`)
console.log(`Reduced: ${sum}`)
console.log(`Mapped: ${squared}`)
console.log(`Filtered: ${largeNums}`)
