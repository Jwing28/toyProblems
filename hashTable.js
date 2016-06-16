//implement hash table
//should handle collisions 
var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;
  var size = 0;

  //if you want to handle collisions: 
  function resize(newSize){
    // For general hash function the only thing to do is to iterate over 
    //old hash table and add each entry 
    // to a new table.
    var oldStorage = storage;
    resizing = true;
    storageLimit = newSize;
    //need to clear out old one to add entries to new one
     storage = [];
     size = 0;
     //iterate over old storage and insert tuples
     //into new storage
     oldStorage.forEach(function(tuple){
       tuple.forEach(function(item){
         result.insert(item[0],item[1]);
       });
     });
  }

  table.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || []; //our bucket
    //check if something already there
      //if so, replae the value with new value at existing key      
      for (var i = 0; i < storage[index].length; i++){

        if(size >= storageLimit * 0.75){
          // increase the size of the hash table
          resize(storageLimit * 2);
        }

        if(storage[index][i][0] === key){
          storage[index][i][1] = value;
          size++;
        }
      }
      storage[index].push([key,value]);
  };

  table.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    //check if key doesn't exist
    // // //check if key exists in bucket)
    if(!storage[index]) {
      return undefined;
    }
    else if(storage.length > 0){
      for (var i = 0; i < storage[index].length; i++){
        if(storage[index][i][0] === key){

          if(size <= storageLimit * 0.25){
            // decrease the size of the hash table
            resize(storageLimit / 2);
          }            
          return storage[index][i][1];
        }
      }
    }
  };

  table.remove = function(key){
    //locate bucket
    //go through storage
    //if the key of that tuple = the key we provided
    //then change the value of that tuple to undefined
    var index = getIndexBelowMaxForKey(key, storageLimit);
    for (var i = 0; i < storage[index][0].length; i++){
      if(storage[index][0][i] === key){
        storage[index][0][1] = undefined;
      }
    }
  }
  return table;  
};  
var getIndexBelowMaxForKey = function(str, max){
 var hash = 0;
 for (var i = 0; i < str.length; i++) {
   hash = (hash<<5) + hash + str.charCodeAt(i);
   hash = hash & hash; // Convert to 32bit integer
   hash = Math.abs(hash);
 }
 return hash % max;
};
