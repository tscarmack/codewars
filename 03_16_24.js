// // Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  let newS = s.split('')
  let middleNum
  let answer
  if(newS.length%2===0){
    middleNum = newS.length / 2
    answer = newS[middleNum - 1] + newS[middleNum]
    
  }else{
    middleNum = newS.length / 2 - 0.5
    answer = newS[middleNum]
}
  return answer
  }