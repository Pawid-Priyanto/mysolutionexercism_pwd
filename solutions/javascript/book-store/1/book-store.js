//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {

  const group = []
  let currentGroupSize = 0;
  let priceperbook = 800;
  let total = 0
const discountRates = {
    1: 1.00, // 0%
    2: 0.95, // 5%
    3: 0.90, // 10%
    4: 0.80, // 20%
    5: 0.75  // 25%
  };
const count = [0,0,0,0,0]
  for (let id of books) {
    count[id - 1]++
  }
 

  let maxPutaranGroup = Math.max(...count)
  console.log(maxPutaranGroup, 'max')
  for (let i = 0; i < maxPutaranGroup; i++) {
    let size =0
    for (let j = 0; j <5; j++) {
      if (count[j] > 0) {
         size++;
        count[j]--;
       
      }
    }
    group.push(size)
  }
for (let k = 0; k < group.length; k++) {
  if(group[k] === 5){
    const angkaGroup3 = group.indexOf(3)
    if (angkaGroup3 !== -1) {
      group[k] = 4;
      group[angkaGroup3] = 4;
    }
  }
}

  console.log(books, group)


  for (let size of group) {
    total += size * priceperbook * discountRates[size]
  }
    return total
 
};
