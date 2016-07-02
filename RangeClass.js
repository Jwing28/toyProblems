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