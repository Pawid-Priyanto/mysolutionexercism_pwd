// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...number} ids
 * @returns {number[]} wagon ids
 */
export function getListOfWagons(...a) {
 return a
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */
export function fixListOfWagons(ids) {

 let firstTwo = Array.from(ids).slice(0,2)
  let newIds = Array.from(ids).slice(2)
  return [...newIds, ...firstTwo]
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
let newIds = Array.from(ids).slice(1)
let firstIds = Array.from(ids).slice(0, 1)
let newMissingWagons = Array.from(missingWagons).slice(1)
let firstMissingWagons = Array.from(missingWagons).slice(0, 1)

  return [...firstIds, ...firstMissingWagons,  ...newMissingWagons, ...newIds]

  
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
 return {...information, ...additional}
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  let {timeOfArrival, ...rest} = information
 console.log(information, timeOfArrival)

  return [timeOfArrival, rest]
}
