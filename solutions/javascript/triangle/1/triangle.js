//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {

    const sorted = sides.sort((a, b) => a - b)
    const [s1,s2,s3] = [...sorted]
    console.log(sides, sorted, s1)
    if (s1 <= 0 || s1 + s2 < s3) {
     this.isValid = false
    } else {
      this.isValid = true
    }

    this.sisiUnik = new Set([s1,s2,s3]).size
   
    
  }

  get isEquilateral() {
    if (!this.isValid) {
      return false
    }

    return this.sisiUnik === 1
  }

  get isIsosceles() {
  if(!this.isValid){
    return false
  }
    return this.sisiUnik === 1 || this.sisiUnik === 2
  }

  get isScalene() {
  if(!this.isValid){
    return false
  }
    return this.sisiUnik === 3
  }
}
