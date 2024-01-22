// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    if(input === null){
      return []
    }
    
    let positiveCount = 0
    let negativeSum = 0
    let containsNonZero = false
    
    for(let i = 0; i<input.length; i++){
     let currentNum = input[i]
     if (currentNum > 0){
       positiveCount += 1;
      containsNonZero = true
     }else if (currentNum < 0){
       negativeSum += currentNum
      containsNonZero = true
     }
      
      }
    if (!containsNonZero){
        return []
    }
    return [positiveCount, negativeSum]
  }