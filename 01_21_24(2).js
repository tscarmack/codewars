// DNA to RNA Conversion
function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let RNA = '';
    for(let i=0; i<dna.length; i++){
      if (dna[i] != 'T' ){
        RNA += dna[i]
      }else {RNA += 'U'}
    }
    return RNA
  }