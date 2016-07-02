//implement a range class

//The step is the interval at which elements are included. For instance, 
//a step of 1 includes every element in the range, while a step of 2 includes
//every other element.

//You should allow a negative value for ‘step’ to count backwards. If no step 
//is provided and the start is more than the end, assume we’re counting backwards.

//range class
var Range = function(start, end, step) {
if(!start){
  this.start = null;
}else {
  this.start = start;
}
if(end || end === 0){
  this.end = end;
}else {
  this.end = start;
}
if(step){
  this.step = step;
}else if(step === undefined && this.start <= this.end) {
  this.step = 1;
} else if (step === undefined && this.start >= this.end)
  this.step = -1;
};

//range methods
Range.prototype.size = function () {
  var counter = 0;
  for (var i = this.start; i<= this.end; i+=this.step){
    counter+=1;
  }
  return counter;
};

Range.prototype.each = function (callback) {

  if(this.step > 0){
    for (var i = this.start; i <= this.end; i+=this.step){
      callback(i);
    } 
  } else if(this.step < 0){
    for (var j = this.start; j >= this.end; j+=this.step){
      callback(j);
    }    
  }
};

Range.prototype.includes = function (val) {
  var flag = false;
  
  while(!flag){
    for (var i = this.start; i <=this.end; i+=this.step){
      if(i === val){
        return true;
      }
    }
    return flag;
  }
  return flag;
};

//examples
 var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)

 var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.

 evenNumbers.each(function(val){ console.log(val+'!'); }); //Prints '2! 4! 6! 8!'

 evenNumbers.size() //4

 evenNumbers.includes(2) //True

 evenNumbers.include(3) //False