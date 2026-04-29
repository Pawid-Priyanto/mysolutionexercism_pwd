/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
    let pricePizza = 0
 if (pizza === 'Margherita') {
   pricePizza += 7
 } else if (pizza === 'Caprese') {
   pricePizza += 9
 } else if (pizza === 'Formaggio'){
   pricePizza += 10
 }
  for (let ex of extras) {
    if(ex === "ExtraToppings"){
      pricePizza += 2
    } else {
      pricePizza += 1
    }
  }
  return pricePizza
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
let total = 0;
  // if (pizzaOrders.length == 0) return 0 
  for (let item of pizzaOrders) {
   total += pizzaPrice(item.pizza, ...item.extras)
  }
  return total
  

  
}
