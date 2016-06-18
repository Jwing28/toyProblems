//implement getClosestAncestor and getAncestorPath
//given a family tree

var Tree = function(){
  this.children = [];
};

/*
// Valid Child
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);

grandma.getAncestorPath(me); // => [grandma, mom, me]
mom.getAncestorPath(me)  // => [mom, me]
me.getAncestorPath(me) // => [me]
grandma.getClosestCommonAncestor(me, uncle); // => grandma
*/

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
    
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(person1,person2){
  var path1 = this.getAncestorPath(person1); //[root,right1,right2]
  var path2 = this.getAncestorPath(person2); //[root,right1,right2,right3]

  if(person1 === person2){return person1}
  if(path1 === null || path2 === null){
    return null
  }else {
    var minLength = Math.min( path1.length, path2.length );  
    
    for (var i = 0; i < minLength; i++){
      if(path1[i] !== path2[i]){
        return path1[i-1];
      }
    }
    return path1[minLength-1];    
  }
};
//first, recognize that you can start at the top of the family tree, you don't have to start at the bottom
//this is possible because getAncestorPath is a method on Tree.prototype, so the keyword this, will actually 
//refer to the persons who called getAncestorPath. this fact is reflected when we invoke recurse
//we pass in this as the first node.
Tree.prototype.getAncestorPath = function(person1){
  var result = []; 
    
  //need separate copy of arr to pass back in due to recursion
  //without it/result array would be reassigned
    
  function recurse (arr,node) {
    var copy = arr.slice();
    if(node === person1){ 
     copy.push(node); 
     result = copy;
     console.log('result line 48',result);
     return
    }

    copy.push(node)
    for (var i = 0; i < node.children.length; i++){
      recurse(copy,node.children[i]);
    }
  };
  recurse([],this);
  return result.length ? result : null;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
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

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
