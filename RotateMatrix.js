//Rotates a NxN matrix 90 degrees clockwise.

function rotateMatrix (matrix) {
  var bottom = matrix.length-1; left = 0; right = matrix[0].length-1;
  var column = 0; result = []; final = []; resultCounter = 0; resultCount = 0;
  var test = 0; level = 1; test2 = 0;
  
  while (column <= right) {
    for (var i = left; i <= right; i++){
      result.push(matrix[bottom-i][column]);

      if(i === right){
        test2 = ((i+1) * level)
        final.push(result.slice(test,test2));
  
        test+= matrix[0].length;
        level++;
      }
    }
    column++;
  }
    return final;
}