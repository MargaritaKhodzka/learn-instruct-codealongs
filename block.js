var x = 2

function myFunction() {
  var x = 3
  console.log(`inside myFunction scope x = ${x}`)
}
myFunction()

{
  let x = 3
  console.log(`inside block scope x = ${x}`)
}

if (true) {
  let x = 4
  console.log(`inside if block x = ${x}`)
} else {
  console.log('never gonna get here')
}

console.log(`global scope x = ${x}`)


//TypeError: Assignment to constant variable
const x = 4
console.log(x)
x = 5
console.log(x)


const arr = [1, 2, 3, 4]
arr.push(5)
console.log(arr)
