//Implement breadth first search on a tree
//breadth first search is different than depth first search
//the select function should take in a filter function
//and a depth 
//and go through each child node of a given node before moving on
//(rather than as deep as possible)

var Tree = function(value){
  this.value = value;
  this.children = [];
};

var depth = 0;

Tree.prototype.BFSelect = function(filter, depth) {
  //create depth property - > when depth in loop, increment depth for that child node
  //based on value of current node's depth
  var result = [];
  var queue = new Queue();
  var currentNode;
  this.depth = depth || 0;
  
  queue.enqueue(this);
  
  while(currentNode = queue.dequeue()){
    if(filter(currentNode.value, currentNode.depth)){
      result.push(currentNode.value);
    }
    for (var i = 0; i < currentNode.children.length; i++){
      queue.enqueue(currentNode.children[i]);
      currentNode.children[i].depth= currentNode.depth + 1;
    }
  }
  return result;
};


Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};
