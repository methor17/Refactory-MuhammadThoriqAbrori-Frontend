const findMissingLetter = (array) => {
  
  for (let i = 1; i < array.length; i++) {
    
    const prev = array[i - 1].charCodeAt();
    
    const current = array[i].charCodeAt();
    
    if (current - prev !== 1) { 
      return String.fromCharCode(prev + 1);
    }
  }
  
  return null; // if nothing is found
}

console.log("list_letters_first :  " + findMissingLetter(["c","d","e","g","h"])); 
console.log("list_letters_second :  " + findMissingLetter(["X","Z"]));
