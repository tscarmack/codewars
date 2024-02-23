// // Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  // your code here
  let sum = array.reduce((acc, c)=> (acc + c), 0)
  if(sum>0){
  return sum / array.length
    }else { return 0}
}