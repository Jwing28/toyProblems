//Toy problem from hacker rank
//given a string, find out if it can be a palindrome or not
//meaning, find out if you can arrange the letters such that reversing them
//produces the exact same order of letters

//abc - > cannot be
//aaabb -> baaab passes

function processData(input) {
  var storage = {}, result = 'YES';

  input.split("").forEach(function(value,idx){
      storage[value] = storage[value] + 1 || 1;
  });
    
  for (var key in storage){
     storage[key] % 2 === 0 ? delete storage[key] : "";                  
  }
  return Object.keys(storage).length > 1 ? 'NO' : 'YES';
} 