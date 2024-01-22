// Remove the minimum
function removeSmallest(numbers) {
    let lowestNum = numbers[0]
    let newArray = []
  
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] < lowestNum){
        lowestNum = numbers[i]
      }
    }
    
      let removedOnce = false
      
    for(let i=0;i<numbers.length;i++){
      if(numbers[i] !== lowestNum 
        && removedOnce === false
        ){
        newArray.push(numbers[i]);
      }else if (numbers[i] === lowestNum && removedOnce === false){
        removedOnce = true
      }else{newArray.push(numbers[i])}
    }
    return newArray;
  }