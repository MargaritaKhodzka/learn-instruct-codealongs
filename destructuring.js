prior to es6
var calc = require('./calc')
console.log(calc)

var eleven = calc.add(5, 6)
console.log(eleven)

//------------------------------------
//es 6:

var {multiply, add} = require('./calc')

var thirty = multiply(5, 6)
console.log(thirty)

var ten = add(5, 5)
console.log(ten)
