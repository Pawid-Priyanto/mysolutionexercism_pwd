//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (text) => {
  let textKecil = text.toLowerCase()
  const alfabet = "abcdefghijklmnopqrstuvwxyz"
  for (let huruf of alfabet) {
    console.log(huruf)
    if (!textKecil.includes(huruf)) {
      return false
    } 
  
  }
  return true
};
