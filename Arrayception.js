//given an array of nested values (any depth), return the deepest level that contains a non array value

//ex Input: [ [ 5 ], [ [ ] ] ], output: 2

function arrayception (array) {
var result = 0;
  var recurseIn = function (level,count) {
    //return from recurse when current array is empty
    if(level.length === 0){
      return result;
    }else {
      //if current array isn't empty, loop through each item in array
      for (var i = 0; i < level.length; i++){
        //if contents is a number, re-assign result to current count (depth)
        if(typeof level[i] === 'number'){
          if(count > result){
            result = count;  
          }
        }else{
          //if it's not a number, that means it's an array and so
          //we have to recurse deeper, so we increment count because the depth has increased
          recurseIn(level[i],count+1);  
        }
      }
    }
  };
 recurseIn(array,1);
 return result;
}


