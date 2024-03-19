// // Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
  let strSplit = str.split('')
  let output = true
  let counter = 1
//   if(str === ''){
//     output = true
//   }else{
  for (let i = 0; i < strSplit.length; i++){
    for(let j = i+1; j<strSplit.length; j++){
    if((strSplit[i].toLowerCase()) === strSplit[j].toLowerCase()){
      output = false
    }
  }
 }
  //}
  return output
}
