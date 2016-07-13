//Given a roman numeral as input, write a function that converts the roman numeral 
//to a number and outputs it.


function translateRomanNumeral (romanNumeral) {
  var arr = romanNumeral.split(""); value = 0;

  for (var i = 0; i < arr.length; i++){
    
    if(DIGIT_VALUES[arr[i]] === undefined){return "null";}
    
    if(DIGIT_VALUES[arr[i]] < DIGIT_VALUES[arr[i+1]] && i !== arr.length-1){
      value += DIGIT_VALUES[arr[i+1]] - DIGIT_VALUES[arr[i]];
      i+=1
    }else {
      value+= DIGIT_VALUES[arr[i]];
    }
  }
  return value;
}