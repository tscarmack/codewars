// Find the next perfect square!
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let root = Math.sqrt(sq)
    if(Number.isInteger(root)===true){
      let nextNumber = root+1
      return nextNumber * nextNumber
    }
    else{return -1;}
  }