//i: given a range
//find all the prime numbers in that range (inclusive)

function primeSieve (start, end) {
  // Write your code here, and
  // return your final answer.
  var result = [];
  
  if(start === 1){
    start = 2;
  }
  for (var i = start; i <= end; i++){
    if(isPrime(i)){
      result.push(i);
    }
  }
  
function isPrime(value){
  var stop = Math.pow(value,0.5);
  
  for (var i = 2; i <= stop; i++){
    if(value % i === 0){
      return false;
    }
  }
  return true;
}
  
  
  return result;
}