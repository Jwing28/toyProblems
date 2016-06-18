//Determine whether or not a context array is a subset of an input array

Array.prototype.isSubsetOf = function() {
  //subsArr gives access to context array
  //argsArr gives access to input array
  //simply loop over context and find out if values are within input
  //if not, we must return false since all of context array 
  //must be part of input array
  var subsArr = this; argsArr = arguments[0]; bool = true;
    subsArr.forEach(function(el){
      if(argsArr.indexOf(el) === -1){
        bool = false;
      } 
    });
    return bool;
};

  //ex
  var result = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']);//true

    