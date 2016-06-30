//implement a stack.
//using two stacks, create a queue.

//stack - LIFO - Last in , last out
//Queue - FIFO - First in , first out

var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype = {
  push : function(value){
    this.storage[this.count++] = value; //this.storage = { '0': 'a' }
  },
  pop : function(){
    var deleted = this.storage[--this.count];
    delete this.storage[this.count];
    return deleted;
  },
  size : function(){
    return this.count;
  }
};

var Queue = function() {
  var inbox = new Stack(); //now can use methods pop push size
  var outbox = new Stack(); //now can use methods pop push size

  this.enqueue = function(value){
    inbox.push(value);
  };

  this.dequeue = function(){
    //transfer all from inbox to outbox
    //this allows "dequeue, which is FIFO"
    if(outbox.size() === 0){
      while(inbox.size() > 0){
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();          
  };
  
  this.size = function(){
    return inbox.size();
  };
};
