//given # rounds, 
//find all possible outcomes of playing rock paper scissors
function rockPaperPermutation (roundCount) {
  var result = [];
  var plays = ['r','p','s'];
  
  if(roundCount === 0){
    return [];
  }
  //using recursion, concat and a for loop
  //able to build up a string of the possible combinations

  var recurse = function (currentPlay) {
    //base case
    if(currentPlay.length === roundCount){
      result.push(currentPlay);
      return;  
    }else{
      for (var i = 0; i < plays.length;i++){
        //recursive case
        recurse(currentPlay.concat(plays[i]));
      }
    }
  };
  //note start with empty string
  recurse("");
  
  return result;
}
