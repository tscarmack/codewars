// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
    return this.split('').map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
  }