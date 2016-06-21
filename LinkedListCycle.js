//given an linkedlist
//find whether it has a cycle

//a cycle is when a linked list does not have a typical tail (null pointer)
//instead, it points to an existing node, thus creating a "cycle"


//below, the strategy used is a "tortoise and hare" method. The slow linkedlist
//is looped through one node at a time, while the fast node loops through the 
//linkedlist two nodes at a time. eventually, the nodes will equal each other
//if there is a cycle.
  //if there is not, the nodes will eventually reach null (tail) and we would return false.

var hasCycle = function(linkedList){
  var slow = linkedList, fast = linkedList; 
  
  while (fast != null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
    
    if(slow === fast){
      return true;
    }
  }
  return false;};
