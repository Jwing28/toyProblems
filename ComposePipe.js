//compose returns a function that is the result of a list of functions.
//each function is called on the return value of the one that follows.
var compose = function() {
  var func = arguments;
  
  return function(result) {
    for (var i = func.length-1; i >= 0; i--){
      result = func[i].call(this,result);
    }
    return result;
  };
};

//Pipe composes a series of functions and returns the resulting function. 
//Each function is called on the return value of the preceding function.
//the difference is the pipe function is left to right. Compose
//is right to left.

var pipe = function() {
  var func = arguments;
  
  return function(result) {
    for (var i = 0; i < func.length; i++){
      result = func[i].call(this,result);
    }
    return result;
  };
};

//In both functions we are using closure to save the arguments initially passed to 
//each function. once a result is provided to the functions, we loop over 
//the functions, invoke each one, and pass result as an argument to it.
//the accumulated result of all the function calls with the passed in argument is
//what each function returns.