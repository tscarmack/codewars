// // Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
  let num1 = numbers[0]
  let num2
  let same
    
for(let i = 1; i < numbers.length; i++){
if(numbers[i] !== num1){
  num2 = numbers[i]
}
  else{
    same = numbers[i] 
  }
}
  if (same === num1){
    return num2
  }
  else{
    return num1
  }
  
}