//implement a range class

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