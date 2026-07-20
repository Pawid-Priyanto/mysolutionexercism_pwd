//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (number) => {
 if (number < 1) {
   throw new Error("there is no zeroth prime")
 }

  let count = 0
  let angkaSekarang = 2;
   while (count < number){

     let isPrime = true;

     for (let index = 2; index * index  <= angkaSekarang; index++) {
       if (angkaSekarang % index === 0) {
         isPrime = false;
         break;
       }
     }
      if (isPrime) {
         count++
       }
       if (count === number) {
         return angkaSekarang
       }

       angkaSekarang++;
   }
};
