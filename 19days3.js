// Sum of positive
function positiveSum(arr) {
    let total = 0
    for (i=0; i<arr.length; i++){
      if (arr[i]>0){total += arr[i]}
    }
    return total
  }