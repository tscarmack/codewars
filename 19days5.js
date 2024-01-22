// Total amount of points
function points(games) {
    let totalPoints = 0
    for (let i = 0; i<games.length; i++){
      
      let x = Number(games[i].charAt(0))
      let y = Number(games[i].charAt(2))
      
      if(x>y){
        totalPoints += 3
      }else if(x<y){
        totalPoints += 0
      }else if(x===y){
        totalPoints += 1
      }
    }
    return totalPoints
  }