/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export const cookingStatus = (remaingingTimer) => {
  if (remaingingTimer == 0) {
    return 'Lasagna is done.'
  } else if ( remaingingTimer > 0) {
    return 'Not done, please wait.'
  } else {
    return 'You forgot to set the timer.'
  }
}

export const preparationTime = (layer, avg = 2) => {
 return layer.length * avg
}

export const quantities = (arr) => {
  let s = arr.filter(arr => arr == 'sauce').length
  let n = arr.filter(arr => arr == 'noodles').length

  return {
    noodles : n * 50,
    sauce: s * 0.2
  }
}

export const addSecretIngredient = (arr1, arr2) => {
  let lastItem = arr1[arr1.length -1]
  arr2.push(lastItem)
}

export const scaleRecipe = (rec, time) => {
  let newRecipe = {}
    for (let r in rec) {
      console.log(rec)
    newRecipe[r] = rec[r] * (time / 2)
 }
 return newRecipe
}

