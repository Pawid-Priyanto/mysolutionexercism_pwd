//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (string) => {
  console.log(string)

  const cleanString = string.toLowerCase().split(" ").join("").split("-").join("")
  console.log(cleanString)

  const unikString = new Set(cleanString)

  if (unikString.size === cleanString.length) {
    return true
  } return false
};
