//i: string
//o: return index of longest run of characters in the string as an array

function longestRun (string) {
  var maxRun = 0; currentRun = 0; startPos = 0; endPos = 0; results = [];
  var largestRange = 0; largestIndex = 0;
  
  for (var i = 0; i < string.split("").length-1; i++){
    if((i === 0 && string[i] === string[i+1]) || (string[i-1] !== string [i] && string[i] === string[i+1])){
      startPos = i;
      currentRun++;
    }else if(string[i] === string[i+1]) {
      currentRun++;
      
      if(i === string.length-2){
        endPos = i+1;
        results.push([startPos,endPos]);
        break;
      }
    }else {
      if(currentRun > maxRun){
        endPos = i;
        maxRun = currentRun;
        currentRun = 0;
        results.push([startPos,endPos]);
        startPos = i+1;
      }
    }
  }
  
  results.forEach(function(range,index){
    if(range[1]-range[0] > largestRange){
      largestRange = range[1]-range[0];
      largestIndex = index;
    }
  });
  return results.length === 0 ? [0,0] : results[largestIndex];
}