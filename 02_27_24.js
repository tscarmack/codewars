// Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let lowest = Infinity
    for(let i = 0; i<args.length; i++){
      if(args[i] < lowest){
        lowest = args[i]
      }
      
    }
    return lowest
  }

}