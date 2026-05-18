//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const earthInSecondds = 31557600
//   Jika Planet X adalah Mercury, angkanya: 0.2408467

// Jika Planet X adalah Venus, angkanya: 0.61519726

// Jika Planet X adalah Mars, angkanya: 

// Jika Planet X adalah Jupiter, angkanya: 11.862615

// Jika Planet X adalah Saturn, angkanya: 29.447498

// Jika Planet X adalah Uranus, angkanya: 84.016846

// Jika Planet X adalah Neptune, angkanya: 164.79132

  let yearErath = (seconds/earthInSecondds)

  let yearPlanet = 0

  console.log(planet, 'oo')
  switch(planet) {
    case "mercury":
      return yearPlanet = Number((yearErath/0.2408467).toFixed(2))
      break;
    case "venus":
      return yearPlanet = Number((yearErath/0.61519726).toFixed(2))
      break; 
    case "mars":
      return yearPlanet = Number((yearErath/1.8808158).toFixed(2))
      break;  
    case "jupiter":
      return yearPlanet = Number((yearErath/11.862615).toFixed(2))
      break;  
    case "saturn":
        return yearPlanet = Number((yearErath/29.447498).toFixed(2))
      break;  
    case "uranus":
      return yearPlanet = Number((yearErath/84.016846).toFixed(2))
      break;
    case "neptune":
      return yearPlanet = Number((yearErath/164.79132).toFixed(2))
      break;
     case "earth":
      return Number(yearErath.toFixed(2))
      break;  
    default:
     throw new Error("not a planet")
  }
};
