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

//------------------------------------

//object destructuring

function myObject() {
  return {a: 1, b: 2, c: 3}
}

var {a, b, c} = myObject()

console.log(a)
console.log(b)
console.log(c)

//------------------------------------

function myObject() {
  return {a: 1, b: 2, c: 3, d: {e: 4}}
}

var {a, b, c, d, d: {e}} = myObject()

console.log(e)

//------------------------------------

// destructuring function parameters

//array
function myFunc([a, b, c], str) {
  console.log(a)
  console.log(str)
}
myFunc([32, 43, 54], 'hello')

//object

function myFunc({a, b, c}, str) {
  console.log(a)
  console.log(str)
}
myFunc({a: 32, b: 43,c: 54}, 'hello')
