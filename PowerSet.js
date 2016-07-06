//given a string
//find all possible subsets including the empty set


function powerSet (string) {
var results = [""];
var counter = 0;
var newStr = [];
//convert string to array and sort it
string = string.split("").sort().forEach(function(value){
 if(newStr.indexOf(value) === -1){
  newStr.push(value);
 }
});
newStr.join("");
//build a string of all possible subset combinations.
//push each one into results array and return when all subsets found.
var recurse = function (givenStr,currStr) {
  for (var i = 0; i < givenStr.length; i++){
    results.push(currStr + givenStr[i]);
    recurse(givenStr.slice(i+1),currStr+givenStr[i]);
  }
};

recurse(newStr,"");
return results;
}

