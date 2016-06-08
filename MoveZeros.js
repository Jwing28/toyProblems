//i: an array of any values
//o: return array with all zeros moved to the end
let moveZeros = (arr) => {
  let nonZero = []; zero = [];
  for (var i = 0 ; i < arr.length; i++){
    arr[i] === 0 ? zero.push(arr.slice(i,i+1)[0]) : nonZero.push(arr.slice(i,i+1)[0]);
  }
  return nonZero.concat(zero);
}