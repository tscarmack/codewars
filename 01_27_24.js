// A Needle in the Haystack
function findNeedle(haystack) {
    // your code here
    let position
    haystack.forEach((e,i)=> {
                    if(e === "needle"){
      position = i;
    }})
    
    return `found the needle at position ${position}`
  }