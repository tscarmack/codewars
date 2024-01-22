// Reverse words
function reverseWords(str) {
    let words = str.split(' ')
    
    let reversedWords = words.map(word => {
      
      let characters = word.split('')
      let reverseChar = characters.reverse()
      let reversed = reverseChar.join('');
      return reversed
      
    })
    return reversedWords.join(' ')
  }