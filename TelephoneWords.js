// given a digit string such as "0002"
// return a list of all the words that can be formed with such numbers pressed on the telephone
//return all permutations

function telephoneWords (digitString) {
  //build telephone object representing all keys
    var phone = {
    0:[0],1:[1],
    2:['A','B','C'],3:['D','E','F'],4:['G','H','I'],
    5:['J','K','L'],6:['M','N','O'],7:['P','Q','R','S'],
    8:['T','U','V'],9:['W','X','Y','Z']
  };
  var combo = [], results = [], val = 0;
  var ds = digitString.split(""), count = 0, number = 0;
  
  var recurse = function (num){
    if (num === ds.length){
      results.push(combo.join(""));
      return; //ends current call stack
    }

    for ( var i = 0; i < ds.length; i++){
      if(i === phone[ds[num]].length){
        break;
      }
      combo.push(phone[ds[num]][i]);
      recurse(num+1);
      combo.pop();
    }
  };
  recurse(number);
  return results;
}