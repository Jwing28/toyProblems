//create a tree class with methods addChild and contains
//addChild adds children while contains checks each node recursively to find a provided 
//value, otherwise returning false.
var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var newTree = treeMaker(value);
  this.children.push(newTree);
};

treeMaker.methods.contains = function(value){
  var result = false;
  var recurse = function (node) {
    if(node.value === value){
      result = true;
    }else {
      for (var i = 0; i < node.children.length; i++){
        console.log(node.children[i])
        recurse(node.children[i]);
      }
    }
  };
  recurse(this);  
  return result;
};