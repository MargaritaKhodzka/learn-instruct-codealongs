// iterative loop

// 6 possible spices (6!) == (n!)
// 6 * 5 * 4 * 3 * 2 * 1 = 720 possible mixtures

/*
  1: declare a function called factorial that takes in an argument of a positive integer
  2: Rule #1 - if 0 then return 1
  3: Move a starting result of 1
  4: Move over the numbers from high to low (6,5,4,etc)
  5: For each loop, we multiply the result by the number in the loop
  6: Return the current value of result for the function
*/

// const factorial = (n) => {
//   let result = 1;
//   if (n === 0) {
//     return result;
//   }
//
//   for (var i = n; i > 0; i--) {
//     result *= i;
//   }
//   return result
// }

//Recursive

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
  //recusrion code
  /*
    let n = 5
    1. 5 * 4! // 5 * 24 = 120
    2. 4 * 3! // 4 * 6 = 24
    3. 3 * 2! //3 * 2 = 6
    4. 2 * 1! //2 * 1 = 2
    5. 1 * 0! //1 * 1 = 1
  */

  /*
    steps
    1. 1! = 1 * 0! = 1
    2. 2! = 2 * 1! = 2
    3. 3! = 3 * 2! = 6
    4. 4! = 4 * 3! = 24
    5. 5! = 5 * 4! = 120
  */

// console.log('The value of 0! is %d', 1);
// console.log('The value using my factorial function of 0! is %d', factorial(0))
// console.log('The value of 6! is %d', 720);
// console.log('The value using my factorial function of 6! is %d', factorial(6))
// console.log('The value of 5! is %d', 120);
// console.log('The value using my factorial function of 5! is %d', factorial(5))
// console.log('The value of 3! is %d', 6);
// console.log('The value using my factorial function of 3! is %d', factorial(3))


//reverse arrays

const reverseArray = (array) => {
  let reversedArray = [];

  const reverser = (array) => {
    if (array.length === 0) {
      return;
    }
    reversedArray.push(array[array.length - 1]); //push in 5
    reverser(array.slice(0, array.length - 1)); //call the revereser with [1,2,3,4], etc
  }
  reverser(array);
  return reversedArray;
}
// console.log(reverseArray([1,2,3,4,5]))

//reverse string

const reverseString = (string) => {
  if (string === undefined || string === '') return null;
  return string.length === 1 ? string : string.charAt(string.length - 1) + reverseString(string.substring(string.length - 1, 0))
}
console.log('monkey' === reverseString('yeknom'));
console.log('happy' === reverseString('yppah'));
console.log(null === reverseString(''));
console.log(null === reverseString(undefined));
