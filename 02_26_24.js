// // Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    //code here
  let xs = 0
  let os = 0
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'x' || str[i] === 'X'){
      xs++
    }else if(str[i] == 'o' || str[i] === 'O'){
      os++
    }
  }
  if(xs === os){
    return true
  }else{
    return false
  }
}