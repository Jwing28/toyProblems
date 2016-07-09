//given # rounds, 
//find all possible outcomes of playing rock paper scissors
function rockPaperPermutation (roundCount) {
  var result = [];
  var plays = ['r','p','s'];
  
  if(roundCount === 0){
    return [];
  }
  
  var recurse = function (currentPlay) {
    if(currentPlay.length === roundCount){
      result.push(currentPlay);
      return;  
    }else{
      for (var i = 0; i < plays.length;i++){
        recurse(currentPlay.concat(plays[i]));
      }
    }
  };
  recurse("");
  
  return result;
}
