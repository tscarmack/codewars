// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
    let lowestOne = Infinity
    let lowestTwo = Infinity
    let newNums = []
    numbers.forEach((c) => {
      if(c < lowestOne){
        lowestOne = c
      }
    })
    numbers.forEach((c) => {
      if(lowestOne !== c) {
        newNums.push(c)
      }
    })
    newNums.forEach((c) => {
      if(c < lowestTwo){
        lowestTwo = c
      }
    })
    return lowestOne + lowestTwo
  }