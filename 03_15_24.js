// // Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


function fakeBin(x){
let xSplit = x.split('')

  for(let i = 0; i < x.length; i++){
    let num = parseInt(xSplit[i])
  if(num<5){
    xSplit[i] = 0
  }else {
    xSplit[i]= 1
  }
}
  return xSplit.join('')
}
