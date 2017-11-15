function firstDuplicate(a) {
  var freq = {};
  var occurrences = 0;
  var lowestIndex = null;

  a.forEach((value, index) => {
    if (freq[value]) {
      //found it again....
      if (freq[value][1] === 1) {
        freq[value][0] = index;
        freq[value][1]++;
      }
    } else {
      freq[value] = [index, 1];
    }
  });

  //CHECK IF NO DUPS
  for (var checkDups in freq) {
    occurrences += freq[checkDups][1];
  }

  if (occurrences === Object.keys(freq).length) {
    return -1;
  }

  for (var key in freq) {
    if (freq[key][1] > 1) {
      if (lowestIndex === null) {
        lowestIndex = freq[key][0];
      } else {
        //compare current index to existing lowest
        if (lowestIndex > freq[key][0]) {
          lowestIndex = freq[key][0];
        }
      }
    }
  }

  return a[lowestIndex];
}
