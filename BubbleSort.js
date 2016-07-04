var bubbleSort = function (array){
  var temp = 0; swapped = 0;

  for (var i = 0; i < array.length-1; i++){
    //if values need swap , swap
      //everytime, increment counter  
    //if you reach the end of the loop
      //check if counter is 0
        //if so that means you never swapped and so you can return 
      //if counter > 0
        //reset i so you go back and do it again
        
    if(array[i] > array[i+1]){
      temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
      swapped++;
    }
    
    if(i === array.length-2){
      if(swapped === 0){
        return array;//it's sorted
      }else{
        i = 0; 
        swapped = 0;
      }
    }    
  }    
};

