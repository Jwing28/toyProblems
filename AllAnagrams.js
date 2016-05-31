function allAnagrams (string) {
  var result = [];
  var temp1 = 0;
  var temp2 = 0; 

  //pass original string & empty string into function
  //temp1 and 2 used to build value & currStr
  
  var recurse = function (value,currStr){
    //if currStr is one less than string length then currStr length + value length = string.length
    if(currStr.length === string.length-1){
      if(result.indexOf(value+currStr) === -1){
        result.push(value+currStr);
        return;
      }
    }
 
    //temp1 + temp2 combined represent all letters in the original string
    for (var i = 0; i < value.length; i++){
      temp1 = value.slice(0,i) + value.slice(i+1);
      temp2 = currStr + value[i];
      console.log('temp1: '  + temp1 + " " + 'temp2: ' + temp2)
      recurse(temp1,temp2);
    }
    
  }
  recurse(string,"");
  return result.sort();
}

/* Description
In this problem we are given a string like 'abc' and requried to return an array of all of the combinations.
*/