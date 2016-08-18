//suppose 2 kangaroos 
//start position x1,x2, respectively
//jump distance v1,v2, respectively
//write a function to determine whether they will meet. 
  //if meet, return 'YES'
  //if never meet, return 'NO'

function main() {
  //values for these variables provided by problem.
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);

    var totalA = x1;
    var totalB = x2;
    var flag = 'NO';
    
    for (var i = 0; i < 10000; i ++){
        totalA += v1;
        totalB += v2;
        
        if(totalA === totalB){
            flag = 'YES';
        }
    }
    return flag;    
}
