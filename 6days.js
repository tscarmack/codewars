// List Filtering
function filter_list(l) {
    // Return a new array with the strings filtered out
    let newArr=[]
    for(let i =0; i<l.length; i++){
      if( typeof l[i]=== 'number' && l[i]>-1 ){
        newArr.push(l[i])
      }
    }
    return newArr
  }