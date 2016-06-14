//Reimplement the function bind.
//bind is a function that takes two arguments
//the first argument is the context
//the second argument is the function
//when bind is used, it allows you to bind a certain context to a function. it returns a function you can call
//from then on, that function when called, is called in the context of whatever the first argument was.

var bind = function(func, context){
  //grabs the 3rd argument passed, to avoid grabbing the function or the context
  var args = Array.prototype.slice.call(arguments,2);
  
  //when initially bound this function is returned
  return function(){ 
    //now the function that was returned has been called
    var bound = [];
    //we loop over the arguments of the function that was RETURNED, because it was invoked
    for (var i = 0; i < arguments.length; i++){ //bound takes the remaining arguments if any are passed
      bound.push(arguments[i]);
    }
    
    bound = args.concat(bound);
    return func.apply(context,bound);
  };
};  

//works the same way, except it has been attached to Function.prototype.
//this means that the bind method can now be called on any function.
Function.prototype.bind = function(context) {
  //grabs 2nd argument, to avoid grabbing context
  var args = Array.prototype.slice.call(arguments,1);
  var func = this; //equal to function, which is left of calltime dot (within bind)
  //now the function that was returned has been called
  return function(){
    var bound = [];
    //we loop over the arguments of the function that was RETURNED, because it was invoked
    for (var i = 0; i < arguments.length; i++){ //bound takes the remaining arguments if any are passed
      bound.push(arguments[i]);
    }
     
    bound = args.concat(bound);
    return func.apply(context,bound);
  }
};