//given a 2 dimensional array
//print out every value in a sprial format from upper left to center

function spiralTraversal (matrix) {
  var result = [];
  var top = 0;
  var bottom = matrix.length;
  var left = 0;
  var right = matrix[0].length;

var goRight = function () {
  //does left === right? if so return result
  if(left === right){
    return result;
  }
  for (var i = left; i < right; i++){
    result.push(matrix[top][i]);
  }
  top++;
  goDown(); 
};

var goDown = function () {
  //does top === bottom ? return result
  if(top === bottom){
    return result;
  }
  for (var i = top; i < bottom; i++){
    result.push(matrix[i][right-1]);
  }
  right--;
  goLeft();
};

var goLeft = function () {
  //does left === right? if so return result
  if(left === right){
    return result;
  } 
  for (var i = right-1; i >= left; i--){
    result.push(matrix[bottom-1][i]);
  }
  bottom--;
  goUp();
};

var goUp = function () {
  //does top === bottom ? return result
  if(top === bottom){
    return result;
  }
  for (var i = bottom-1; i>= top; i--){
    result.push(matrix[i][left]);
  }
  left++;
  goRight();
};  
  goRight();
  return result;
}