function sequence(nb) {
  if(!Number.isInteger(nb) || !(nb >= 1)) return -1 // Check if number is in N*
  let suit = 1 // default number of the suite and reasigned to next one.
  for (var i = 0; i < nb-1; i++) {
    suit = getSuit(suit)
  } // loop to the number required
  return suit
}

// Get the number suit 
function getSuit(nb){
    let arrayFromNumber = Array.from(String(nb)) // transform the number into a list of char
    let numberAnalysed // Number analysed in the suit
    let count = 0 // The amount of same number
    let secondCount = 0 // The count of the number analysed
    let answer = "" // generate the suit
    
    // Loop to construct the suit by doing something on every char
    for (const value of arrayFromNumber) {
      secondCount++
      // if it's the same number as the precedent 
      if(!numberAnalysed || numberAnalysed == value){
        numberAnalysed = value
        count++
      } else { // if it's a new number
        answer += count.toString() + numberAnalysed.toString() // generate the suit
        numberAnalysed = value
        count = 1
      } // if it's the last number to check 
      if(secondCount == arrayFromNumber.length) {
        answer += count.toString() + numberAnalysed.toString() // generate the suit
      }
    }
    return parseInt(answer)
}

console.log(sequence(4))
