//suppose n is the number of clouds
//c is an array representing the each cloud
//value of 0 in array means steppable cloud
//value of 1 means dangerous (avoid) cloud
//write a function to return the minimum number of steps needed
//to get from the starting cloud to the last cloud

function main() {
    var n = parseInt(readLine());
    var steps = 0;
    c = readLine().split(' ');
    c = c.map(Number);
    
    for (var i = 0; i < c.length; i++){
        if(i + 2 < c.length && c[i+2] === 0){
            steps+= 1;
            i+=1;
        }else if( i + 1 !== c.length){ //avoids extra step count
            steps+=1;
        }
    }
    console.log(steps); 
}
