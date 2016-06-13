//i: number
//o: number converted into its equivalent fraction
function fractionConverter (number) {
  var counter = 1; denom=0;
  //handles arguments that are whole numbers
  if(number % 1 === 0){
    return "" + number + "/1";
  }else {
    if(number.toString().length > 5){
      denom = Math.pow(10,number.toString().length-2);
      number = number.toString().slice(2);
      return "" + number + "/" + denom;
    }
    //multiply the number until it is a whole number
    while ( (number * counter) % 1 !== 0 ){
      counter++;
    }
    //once it is a whole number return it divided by counter, because
    //that will be equal to the original number
    return "" + (number*counter) + "/" + "" + counter;
  }
}