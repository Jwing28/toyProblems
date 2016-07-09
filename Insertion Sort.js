//loop over Array
//setup temp to start at second value
  //setup inner loop that will go opposite direction (loop over sorted)
    //sorted starts with first value
    //if the sorted value is greater than the inserted/temp value
      //add new value to array and sort it 
//once reach end of outer array you have completed sort
function insertionSort ( arr ){
    
  for (var i = 1; i < arr.length; i++){
    var temp = arr[i]; //..already have a temp...
    
    //j being i - 1 will shift "sorted" portion over one to follow right behind
      //(but moves right to left)
    //the temp which is moving from left to right
    for (var j = i-1; j >=0; j--){//j must go the opposite direction to check sorted
      if(arr[j] > temp){ //if this is false, then order is correct
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}
insertionSort([1,3,0,2]); //[0,1,2,3,11];
