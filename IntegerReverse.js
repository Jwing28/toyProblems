
//i: positive integer
//o: reversed integer, make sure type is a number

function reverseInteger(n){
  var remainder = 0;
  while(n > 0){
    remainder = remainder  * 10 + n % 10;
    //keep reducing n until it is 0.
    n = Math.floor(n/10);
  }
  return remainder;
}