//given an n x n matrix,
//write a function that will return the diagonal difference


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var a = [];
    var UL = 0;
    var LR = 0;
    var j = 0;
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    //redefine j
    j = a.length-1;
    
    for (var i = 0; i < a.length; i++){
        UL += a[i][i];
        while(j >= 0){
            LR += a[i][j];
            j--;
            break;
        }        
    }
    

    console.log(Math.abs(UL-LR)); 
    //0,2 -> 1,1, 2,0; i is going 0,1,2. j starts at 2 and stays at 2.

}
