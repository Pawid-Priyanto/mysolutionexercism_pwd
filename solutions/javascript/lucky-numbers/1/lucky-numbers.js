// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  
  let mixArray1 = array1.join('')
  let mixArray2 = array2.join('')
  return Number(mixArray1) + Number(mixArray2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
 let isPolindrome = String(value).split("").reverse().join("")
  if (value == isPolindrome) {
    return true
  } else {
    return false
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let converted = Number(input)
  if (input === "" || input === null || input === undefined) {
   return 'Required field'
 }
   if (converted === 0 || isNaN(converted)) {
   return 'Must be a number besides 0'
 }

 
    return ""
 
}