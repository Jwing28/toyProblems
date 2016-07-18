//i given an array of numbers, find the
//o greatest contiguous sum 

function sumArray (array) {
 var current =  max = array[0];
 
 for (var i = 1; i < array.length; i ++){
   current = Math.max(current+array[i],array[i]);
   max = Math.max(max,current);
 }
  return max;
}
