//implemet a linkedlist
//a linked list is a data structure with a head and tail and nodes in between
//each node (except the tail) has a value and a next property, which points to
//the next node in the list. this is a singly linked list. 
//the linkedlist itself has methods removehead and addto tail

//Time Complexity: 
//Traverse a linklist: linear
//addTotail / removeHead: constant


var LinkedList = function (initialValue) {
  if(initialValue === undefined){
    this.head = {value: null};
    this.tail = {value: null};    
    this.head.next = {value: null};
  }else {
    this.head = {value: initialValue};
    this.tail = {value: initialValue};  
    this.head.next = {value: null};
  }
};

LinkedList.prototype = {
  addToTail: function (value) {
    if(this.tail.value === null){
      this.tail.value = value;
    }else {
      this.head.value = this.tail.value;
      this.head.next.value = value;
      this.tail.value = value;
    }
    
  },
  
  removeHead: function () {
    if(this.head.value === this.tail.value){
      this.head = null
      this.tail = null;
    }else{
      this.head.value = this.tail.value;  
    }
  },
  
  contains: function (value) {
    if (this.head.value === value || this.tail.value === value){
      return true;
    }else {
      return false;
    }
  }
};