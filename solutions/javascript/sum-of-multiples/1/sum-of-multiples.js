//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (listValue, level) => {
  const uniqSet = new Set()
  for (let list of listValue) {
    if (list === 0) {
        continue
      }
    for (let i = list; i < level ; i += list) {
      uniqSet.add(i)
    }
  }

  let total = 0

  uniqSet.forEach((num) => total += num)
  console.log(level, listValue, total)
  return total
};
