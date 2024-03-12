// // Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  // Your code here
  let split = str.split('')
  let output = []
  for(let i = 0; i < split.length; i++){
    output.push(split[i])
    output.push(split[i])
  }
  output = output.join('')
  return output
}
