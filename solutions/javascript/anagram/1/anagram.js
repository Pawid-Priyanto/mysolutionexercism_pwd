//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, words) => {
  
  const sortedWord = (str) => str.toLowerCase().split("").sort().join("")
  let result = []
  for (let w of words) {
    let currentOriginal = w.toLowerCase()
    if (sortedWord(w) === sortedWord(word) && currentOriginal != word.toLowerCase()) {
      result.push(w)
    }
  }
  return result
};
