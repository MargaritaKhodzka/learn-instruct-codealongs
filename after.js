//default value assignment in es6

function foo(x = 100) {
  console.log(x)
}

foo()
foo(50)
foo(0)
foo('hello')

function yes() {
  console.log('yes is called')
}

//lazy expression is called once
function stuff(x = yes()) {

}
stuff()

//--------------------------------------------

//the rest operator (the gather operator)
function foo(...args) {
  return args.map(x => x * 2)
}
console.log(foo(1, 2, 3, 4, 5))

function foo (x, y, ...args) {
  console.log(x)
  console.log(y)
  console.log(args)
}

foo(1, 2, 3, 4, 5)

//the spread operator
var x = [1, 2, 3, 4]
console.log(...x)
console.log([0, ...x, 5])

//--------------------------------------------

var x = [1, 2, 3]
var y = x.concat(4)
var z = [...x, 4]

console.log(x)
console.log(y)
console.log(z)

//--------------------------------------------

//using both gather and spread operator at the same time
function foo(...args) {
  args.shift()
  console.log(...args)
}

foo(0, 1, 2, 3, 4)

//--------------------------------------------
function foo(x, y, ...rest) {
  console.log(rest)
}

var a = [1, 2, 3]
var b = [4, 5, 6]

foo(...a, ...b)

//--------------------------------------------

function foo(a, b, c, ...d) {
  return [a, ...d]
}

function bar() {
  var a1 = [2, 4]
  var a2 = [6, 8, 10, 12]

  return foo(...a1, ...a2) // foo(2, 4, 6, 8, 10, 12)
}

console.log(
  bar().join("") === "281012"
)
