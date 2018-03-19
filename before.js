//default value assigment before es6

function bar(x) {
  //if want to pass 0 as an argument
  x = x !== undefined ? x : 100
  console.log(x)
}

bar(0)
