//i: string
//o: array of arrays sorted in descending order 
//by frequency & ascending order by character.

function characterFrequency (string) {
  var result = []; freq = {};
  var strArr = string.split(""); sorted = [];
  //need to account for if none of the values are equal
  for (var i = 0; i < strArr.length; i++){
    freq[strArr[i]] = freq[strArr[i]] + 1 || 1;
  }
  for (var key in freq){
    result.push([key,freq[key]]);
  }

  //sort based on descending order by frequency
  //THEN, ascending order by character/letter
  return result.sort(function(a,b){
    if(a[1]<b[1]){
      return 1;
    }
    if(a[1]>b[1]){
      return -1;
    }
    if(a[1]===b[1]){
      if(a[0]>b[0]){
        return 1;
      }
      if(a[0]<b[0]){
        return -1;
      }
      return 0;
    }
    
  });
}