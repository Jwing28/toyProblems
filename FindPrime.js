//i: integer
//o: true if value is prime number, false if it is not.

function prime (n) {
  if(n > 2){
    var sqrt = Math.max(Math.pow(n,0.5));  
  }
  if(n ===2){
    return true;
  }
  if(n === 1){
    return false;
  }
  for (var i = 2; i <= sqrt; i ++){
    if( n % i === 0){
      return false;
    }
  }
  return true;
}