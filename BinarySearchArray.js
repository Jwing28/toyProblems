//i: sorted array
//o: return idx of target value

function binarySearch (array, target) {
  var max = array.length-1; 
  var min = 0; //0
  var mid = Math.floor((max + min) / 2); 


  //reset max and min based on comparison to target
  //when target is equal to midpoint we know we've reached the value, so we return the idx of mid
  while( max >= min){
    mid = Math.floor((max + min) / 2);
    if(target === array[mid]){
      return mid;
    }else if (target < array[mid]){
      max = mid - 1;
    }else if (target > array[mid]){
      min = mid + 1;
    }
  }
  return -1;
}