// Smallest Word
function findShort(s){
    let sArr = s.split(' ')
    let smallestWord = sArr[0]
    sArr.forEach((x,i) => {
      if(x.length < smallestWord.length){
        smallestWord = x
      }
    })
    return smallestWord.length
  }