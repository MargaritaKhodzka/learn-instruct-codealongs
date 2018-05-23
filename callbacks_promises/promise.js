// var promise = new Promise(function(resolve, reject) {
//   //resolve('Good!')
//   reject('Error!')
// })
//
//
// promise
//   .then(function(data) {
//     console.log(data)
//   })
//   .catch(function(error) {
//     console.log(error)
//   })

var isATeenager = (age) => {
  return new Promise((resolve, reject) => {
    if (age === undefined) {
      reject('Please enter a valid age')
    } else if (age < 13 || age > 19) {
      resolve ('You are not a teenager')
    } else {
      resolve('You are a teenager')
    }
  })
}

var teenagerPromise = isATeenager()

teenagerPromise
  .then(data => console.log(data))
  .catch(error => console.log(error))
