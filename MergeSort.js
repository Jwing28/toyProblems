//merge sort is one of many sorting algorithms
//it is the only one with O(n log n) time complexity (insertion, bubble, selection are all linear) -> 

//merge sort keeps splitting up the values until they are all separated into separate values
//then, each value/group is merged up in order

var mergeSort = function (arr){
  var p = 0; r = arr.length; result = []; merge = arr.length;
  var q = Math.floor((p+r) / 2); //3
  var arr1 = arr.slice(p,q).sort(function(a,b){return a-b}); arr2 = arr.slice(q,r).sort(function(a,b){return a-b}); 
  var lng = arr1.length > arr2.length ? arr1.length : arr2.length > arr1.length ? arr2.length: arr1.length;

  while (merge > 0){
    if(arr1[0] > arr2[0]){
      result.push(arr2.splice(0,1)[0]);
    }else{
      if(arr1.length){
      result.push(arr1.splice(0,1)[0]);  
      }else {
      result.push(arr2.splice(0,1)[0]);        
      }
    }
    merge--;
  }
  console.log('result',result);
};

mergeSort([2,4,1,6,8,5,3,7,0,10,13]); //1 2 3 4 5 6 7 8