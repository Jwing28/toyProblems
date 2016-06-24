//i: string
//o: find first non repeated character (not repeating, repeated)
//this means we have to count all the different letters that exist 
//within the string

function firstNonRepeatedCharacter (string) {
  var result = {}, letters = string.split("");
  
  //to do this ive used an object to count each unique character
  for (var i = 0; i < letters.length; i++){
    result[letters[i]] = result[letters[i]] + 1 || 1;
  }
  //now we can go through each one and find the one that only came up once
  for (var findFirst in result){
    if(result[findFirst] === 1){
      return findFirst;
    }
  }
  //but if every character is repeated then we return a message
  return "all characters repeat";
}

