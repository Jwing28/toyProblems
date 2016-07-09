//least efficient algorithm to sort!
//at worst, insertion sort is as good as bubble sort

//go through each value and swap it until you go through the entire array
//and you find no values to swap then you know its sorted

function bubbleSort (array) {
  //[3,1,2] -> 
  var swapped = true;
  while(swapped){
    swapped = false;
    
    for (var i = 0; i < array.length-1; i++){
      console.log(array);
      if(array[i] > array[i+1]){
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  }
  return array;
}
bubbleSort([3,1,2,100,99,55,2]);