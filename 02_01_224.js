// Counting sheep...


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Hint: Don't forget to check for bad values like null/undefined


function countSheeps(sheep) {
    // TODO
    let presentSheep = []
    sheep.forEach((e) => {if(e=== true){
                             presentSheep.push(e)
                             }
                             })
  return presentSheep.length
  }