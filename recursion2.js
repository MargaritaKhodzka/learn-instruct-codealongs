/*
  Palindrome - a word/sequence that is the same front and backwards
*/

/*
  Rules:
    1. An empty string is a palidrome
      '' = true
    2. One character string is a palidrome
      'a' <=> 'a' = true
  Process:
    Example: 'rotor'
    Steps:
    1. is the string empty? if not, continue ... else return true
    2. is the string 1 char long? if not, continue ... else return true
    3. is firstChar === lastChar? if yes, continue ... else return false //build functions that return first and last chars
    4. remove first and last chars and repeat the process //'rotor' => 'oto' => 't'
*/

const firstChar = (str) => {
  return str.slice(0, 1)
}

const lastChar = (str) => {
  return str.slice(-1)
}

const chopString = (str) => {
  return str.slice(1, - 1)
}

const isAPalindrome = (str) => {
  //if a number
  if (typeof str !== 'string') {
    return false
  }

  //steps 1 & 2
  if (str.length <= 1) {
    return true
  }

  //step 3
  if (firstChar(str) !== lastChar(str)) {
    return false
  }

  //step 4
  return isAPalindrome(chopString(str)) //'mom' => 'o'
}

console.log(isAPalindrome('mom') === true)
console.log(isAPalindrome('monkey') === false)
console.log(isAPalindrome('a') === true)
console.log(isAPalindrome('apples') === false)
console.log(isAPalindrome(1) === false)
