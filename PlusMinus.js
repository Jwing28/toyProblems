//given multiple integers
//return the fraction that are positive, negative, and zero

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
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var pos = 0;
    var neg = 0;
    var zer = 0;
    var result = [];
    var total = arr.length;
    
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            pos++;
        }else if (arr[i] < 0){
            neg++;
        }else {            
            zer++;
        }    
    }
    result.push(pos,neg,zer);
    
    for (var j = 0; j < 3; j++){
        console.log(result[j] / total);
    }
}
