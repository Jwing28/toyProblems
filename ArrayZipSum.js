Input: two arrays (values can be pos or neg integers)
Output: one array (which has length of shortest array in input) is sum of elements at each index.

function zipSum (xs, ys) {
  //find short and long arrays
  //return an array where you add each value at each index, this will be done number of times based on 
  //length of shortest array
  var shortArr = xs.length < ys.length ? xs : xs.length > ys.length? ys : xs;
  var lngArr = xs.length > ys.length ? xs : xs.length < ys.length? ys : ys;

  return shortArr.map(function(it,i){return shortArr[i] += lngArr[i]; });
}

//ex. 
zipSum([10,20,30],[1,2,3]); - > [11,22,33]