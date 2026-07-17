//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n == 0) {
    return []
  }
  let segitiga = []
  for (let i = 0; i <n; i++) {
    let baris = []

    for (let j = 0; j <=i; j++) {
     if ( j == 0 || j == i) {
       baris.push(1)
     } else {
       const angkaKiriAtas = segitiga[i-1][j-1]
       const angkaKananAtas = segitiga[i-1][j]
       console.log(angkaKananAtas, angkaKiriAtas)
       baris.push(angkaKananAtas + angkaKiriAtas)
     }
    }
    segitiga.push(baris)
  }
  return segitiga
};
