// // Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
//   combines string
  let combinedString = s1+s2
//   removes duplicates
  let uniqueLettersSet = new Set(combinedString)
//   turns string into array
  let uniqueLettersArray = Array.from(uniqueLettersSet)
//   sorts array into alphabetical order
  uniqueLettersArray.sort()
//   turns back to string
  let longestString = uniqueLettersArray.join('')
    
    return longestString
}