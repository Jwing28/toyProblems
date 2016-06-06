/*It works by starting at the first element of an array and comparing it to the second element:
If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.*/

var bubbleSort = function(array) {
  var compare1 = 0; compare2 = 0; result = []; counter = 0; 
  //building an array where array values are sorted in place
  while (result.length <= array.length){
    compare1 = array[counter];
    compare2 = array[++counter];//counter is incremented here and returned unlike counter++
    compare1 > compare2 ? result.push(compare2,compare1) : result.push(compare1,compare2);  
  }
  return result;
};
