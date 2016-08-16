//given an integer, find that nth fibonacci number
// 0 - > 0 , 1 -> 1, 4-> 3
//do so without recursion, linear time

var nthFibonacci = function(n) {  
  var counter = 2;
  var first = 0;
  var second = 1;
  var fib = 0;
  
  if (n === 1 || n === 0){
    return n;
  }
  
  while (counter <= n){
    fib = first + second;
    first = second;
    second = fib;
    counter++;
  }
  return fib
};

