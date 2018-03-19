//default value assigment before es6

function bar(x) {
  //if want to pass 0 as an argument
  x = x !== undefined ? x : 100
  console.log(x)
}

bar(0)

//--------------------------------------------

function double (a, b, c) {
  var argsArray = [].slice.call(arguments)
  return argsArray.map(x => x * 2)
}

console.log(double(1, 2, 3, 4, 5, 6, 7))
