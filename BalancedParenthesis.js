function isBalanced (string) {
//i: some string     o: return true if contains balanced parenthesis -> ( )
  var open = "("; close = ")";
  var count = {};
  string = string.split("");
  //cannot start with closing parenthesis, this one will never be "balanced"
  if(string[0] === ")"){return false;}
  
  for (var i = 0; i < string.length; i++){
    if(string[i] === open){
      count[open] = count[open] + 1 || 1;
    }else if(string[i] === close) {
      count[close] = count[close] + 1 || 1;
    }
  }
  //if they are "balanced", this expression will be eqaul
  return count[open] === count[close] ? true : false;
}