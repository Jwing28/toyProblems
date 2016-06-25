//i: given a string
//o: all subsets of given string

//in this toy problem, we've used recursion, to slowly piece together a string
//each resultant string must be one substring outcome

function powerSet (string) {
var results = [""];
var counter = 0;
var newStr = [];

//split string into array, sort the letters
//for each letter, if it is not in new string add it
string = string.split("").sort().forEach(function(value){
 if(newStr.indexOf(value) === -1){
  newStr.push(value);
 }
});
//now we have a string which is sorted
newStr.join("");

var recurse = function (givenStr,currStr) {
  //loop through letters
  for (var i = 0; i < givenStr.length; i++){
    //push the concatenation of the currStr and the given string
    //notice when we recurse, 
      //givenStr = slices one portion
      //currStr = slices remaining portion

      //this ensures that the concated portion includes all letters
      //in original string
    results.push(currStr + givenStr[i]);
    recurse(givenStr.slice(i+1),currStr+givenStr[i]);
  }
};

//pass sorted letters and empty string to recursion function 
recurse(newStr,"");
return results;
}

