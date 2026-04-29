// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
export function getCardPosition(stack, card) {
 // let index = stack.findIndex((s) => s == card)
 //  return index
  let i = stack.indexOf(card)
  return i
}

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
export function doesStackIncludeCard(stack, card) {
  let matchStack = stack.includes(card)
  return matchStack
}

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
export function isEachCardEven(stack) {
  let isEven = stack.every((s) => s % 2 === 0)
  return isEven
}

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
export function doesStackIncludeOddCard(stack) {
 let odd = stack.some((s) => s % 2 != 0)
  return odd
}

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number | undefined} the first odd value
 */
export function getFirstOddCard(stack) {
  
  let firstOdd = []
    stack.forEach((s, i) => { if(s % 2 != 0){
   firstOdd.push(s)
  } })
  console.log(firstOdd)
  return firstOdd[0]
}

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
export function getFirstEvenCardPosition(stack) {
 let firstEven = []
  stack.forEach((item) => {
    if (item % 2 == 0) {
      firstEven.push(item)
    }
    console.log(firstEven)
  })

  return stack.indexOf(firstEven[0])
}
