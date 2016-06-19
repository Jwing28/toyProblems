/*
Given a string,
where first item (N) is number of random strings
then the next items are the next (N) strings 
after this is aother number which is number of queries 

after this is the set of queries

log the frequency of each queries existence in the provided strings as avalue (or 0) 
*/

//loop through arr (skip first value)
//for each item, build a counter object
//once get to next number
//console.log it's frequency by looking it up in an object
const processData(input) =>  {
    let arr = input.split('\n');
    let freq = {};

    for (var i = 1; i < arr.length; i++){
        freq[arr[i]] = freq[arr[i]] + 1 || 1; 
        
        if(!isNaN(arr[i])){
            for (var j = i+1; j< arr.length; j++){
                console.log(freq[arr[j]] || 0)
            }
            break;
        }        
    }  
} 
//time complexity: linear, we loop through one section of the array we built
//then the remaining section. As N increases, time added to operation increases
//by N.