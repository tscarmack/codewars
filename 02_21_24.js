// // Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output

function basicOp(operation, value1, value2){
  //Code
  if(operation == '+'){
     return value1 + value2
     }else if(operation == '-'){
     return value1 - value2
     }else if(operation == '*'){
     return value1 * value2
     }else {return value1 / value2}
}