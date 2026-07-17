//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(score) {
   this.score = score

  }

  get scores() {
   return this.score
  }

  get latest() {
    return this.score[this.score.length - 1]
  }

  get personalBest() {
    return Math.max(...this.score)
  }

  get personalTopThree() {
    return [...this.score].sort((a,b) => b-a).slice(0,3)
  }
}
