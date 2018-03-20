//array destructuring

function myArray() {
  return [1, , 3]
}

var [a, b = 2, c] = myArray()

console.log(a)
console.log(b)
console.log(c)

//------------------------------------

function myArray() {
  return null
}

var [a, b = 2, c] = myArray()
// => TypeError

var [a, b = 2, c] = myArray() || []
// => undefined, 2, undefined

console.log(a)
console.log(b)
console.log(c)

//------------------------------------

function myArray() {
  return [1, 2, 3, [4, 5, 6]]
}

var [a, b , c, [d, e, f]] = myArray() || []

console.log(d)
console.log(e)
console.log(f)
