/*
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence 
items and return the first one. Return null if there are no even-occurrence items.
*/

function evenOccurrence (arr) {
  var results = {};
  var numEven = [];
  //create obj that tracks
  
  //object tracks count of each item in the array
  for (var i = 0; i < arr.length; i++){
    results[arr[i]] = results[arr[i]] + 1 || 1;
  }
  //find first value that has even number of occurrences
  for (var key in results){
    if(results[key] % 2 === 0 && results[key] > 0){
      if(isNaN(key)){
        return key;
      }else {
        return parseInt(key);
      }
    }
  }
  return null;
}

//time complexity is linear. may seem like it is quadratic but that exists when each item in a loop
//loops over every other item. that is not happening here. 