function secrettext(input){
  return input.split("").map(function(char, index){
    if(index === (input.length - 3) || index === (input.length - 2) || index === (input.length - 1)){
      return char;
    } else {
      return "*";
    }
  }).join("");
}

console.log(secrettext("23dn3ir30fd2eddd"));