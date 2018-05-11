// let cards = [2, 5, 1000, 900, 45, 2, 3];

/* Swapping values
1. create a function called swap
2. pass in 3 arguments
  - Array
  - first swap location
  - second swap location
3. set the value of the first swap location item
4. update the first swap location (firstIndex) with the value of the 2nd swap location
5. update the second swap location (secondIndex) with the value of the firstValue
*/
//
const swap = (array, firstIndex, secondIndex) => {
  const firstValue = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = firstValue;
  // console.log('original value of first index is', firstValue)
  // console.log('new value of the first index is', array[firstIndex])
  // console.log('new value of second index is', array[secondIndex])
}
// console.log('the original set of cards was', cards)
// swap(cards, 1, 4)
// console.log('the modified set of cards is', cards)
// console.log('We want the values lowest to highest')
/*
Selection sort
1. Find the number with the smallest value and swap it with the first number in the array
  - let array = [20, 19, 4, 31, 2, 8]
  - index 4
  - return the index of the smallest value
2. Find the second smallest value and replace it with the number in index 1
  - let subarray = [20, 19, 4, 31, 8]
  - pass in the entire array and give it a starting point
3. Find the third smallest value and replace it with the number in index 2
4. Rinse and repeat
*/

const findIndexOfMin = (array, startingPoint) => {
  let minVal = array[startingPoint];
  let minIndex = startingPoint;
  let arrayLength = array.length;

  for (var i = startingPoint + 1; i < arrayLength; i++) {
    if (array[i] < minVal) {
      // console.log('changing minVal to equal', array[i])
      minVal = array[i];
      minIndex = i;
    }
  }
  // console.log('returning the minIndex, which is %s', minIndex)
  return minIndex;
}

/*
Selection sort
You give it an array and it sorts the values and returnes them in ascending order from lowest to highest
*/

const selectionSort = (array) => {
  // console.log('Your array is %s', array)
  //find the min value and swap by its index
  const arrayLength = array.length;

  for (var i = 0; i < arrayLength; i++) {
    // console.log('finding index of min value...')
    const minIndex = findIndexOfMin(array, i);
    // console.log('swapping the values...')
    swap(array, i, minIndex);
  }
  return array;
}

let array = [300, 5, 1000, 900, 45, 3, -6, 3, 55, 31];

console.log(selectionSort(array))
