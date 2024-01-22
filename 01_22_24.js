// Beginner Series #3 Sum of Numbers
function getSum(a, b)
{
   //Good luck!
  
  let sum = 0
  if(a === b){
    sum = a
  }else if(a < b){
    for(let i = a; i <=b; i++){
      sum = sum + i
    }return sum
  }else if(b < a){
    for(let i = b; i <=a; i++){
      sum = sum + i
    }return sum
  }
 return sum
}