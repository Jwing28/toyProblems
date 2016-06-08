/*
given currency: 
In other words, find all the possible combinations of coins that sum to a given total.

Given: var coins = [1,2,5,10,20,50,100,200];
*/

function coinSums (total) {
var combos = 0;
  //this function builds up a group of coins until it is equal to our total, at which point
  //we build up a new combination that will equal the total
  //when complete, we have all combinations that equal the total, given the coins we have
  var recurse = function (accumSum,index){
    if(accumSum === total){
      combos++;
      return;
    }
    if(accumSum < total){
      for (var i = index; i < coins.length; i++){
        recurse(accumSum + coins[i],i);
      }
    }
  };
  
  recurse(0,0);
  return combos;
}