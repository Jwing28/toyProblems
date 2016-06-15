//implement hash table
//should handle collisions but does not
//need to handle resizing

  var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || []; //our bucket
      //check if something already there
        //if so, replae the value with new value at existing key      
        for (var i = 0; i < storage[index].length; i++){
          if(storage[index][i][0] === key){
            storage[index][i][1] = value;
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
            console.log(storage[index][i][1])
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
