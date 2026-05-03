//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
 let res = number.toString().slice(-1)
 let added = ''

  if (number.toString().endsWith('11') || number.toString().endsWith('12') || number.toString().endsWith('13')) {
    added += 'th'
  } else if (res === '1') {
    added += "st"
  } else if(res === '2') {
    added += "nd"
  } else if(res === '3'){
    added += "rd"
  } else {
    added += "th"
  }
  return `${name}, you are the ${number}${added} customer we serve today. Thank you!`
};
