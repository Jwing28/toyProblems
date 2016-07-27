//implement a map method on the tree class
//the map method will accept a callback function which will be invoked
//on every node in the tree

var Tree = function (value) { //value = 'root';
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
  //when root.map() is run, it should return an instance of Tree
  var newTree = new Tree(callback(this.value));
  
    for (var i = 0; i < this.children.length; i++){
      newTree.addChild(this.children[i].map(callback));
    }
  return newTree;
};

Tree.prototype.addChild = function (child) {
  if (! child ||  ! (child instanceof Tree)){
    child = new Tree(child);
  }

  if (! this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

//see if the provided tree is already a child of this tree __or any of its sub trees__
  
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index,1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};
