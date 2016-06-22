//palindrome is a phrase that is the same front to back (if you reverse it)
//in order to find this I used recursion. By splitting up the original string
//into an array of letters, I check if the string array we are building
//is equal to the reverse of itself

function longestPalindrome (string) {
  var str = string.split("");//iterate over this
  var compareStr = []; //check if palindrome here
  var palindrome = "";

  var recurseString = function (strArr){
    if(strArr.length === 1){
      return palindrome;
    }
    for (var i = 0; i < strArr.length; i++){

      compareStr.push(strArr[i]);
      
      if((compareStr.join("") === compareStr.slice().reverse().join("")) && (compareStr.length > 1)){
        //palindrome found so save this as longest palindrome 
        if(compareStr.length > palindrome.length){
          palindrome = compareStr;  
          break;
        }
      }
    }
    compareStr = [];
    strArr.splice(0,1);

    recurseString(strArr);
  };
  recurseString(str);

  //return longest palindrome at end
  return palindrome.join("");
}