//normal function declaration

function bar (a, b) {
  console.log(a, b)
}
bar(1, 3)

//arrow function

var add = (a, b) => {
  return a + b
}
console.log(add(4, 5))

var deduct = (a, b) => a - b
console.log(deduct(15, 9))

var operations = (a, b) => {
  var c = a * 2
  var d = b * 3
  return c + d
}
console.log(operations(5, 6))

var a = [1, 2, 3, 4, 5]
// var newArray = a.map(function(x) {
//   return x * 2
// })
var newArray = a.map(x => x * 2)
console.log(newArray)

var controller = {
  bindListener: function () {
    var btn = document.getElementById('btn')
    btn.addEventListener('click', () => {
      console.log('making the request')
      this.sendRequest()
    }, false)
  },
  sendRequest: function() {
    console.log('Sending the request...')
  }
}
controller.bindListener()
