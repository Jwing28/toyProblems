/*
AsyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
Each of the tasks takes a separate callback and invokes that callback when complete.
*/

var asyncMap = function(tasks, callback){
  var results = [];
  var count = 0;
  
  //loop through each task, invoke the task, and pass in an anonymous function
  //result will store results and increment our task counter.
  tasks.forEach(function(task,index){
    task(function(result){
      results[index] = result;
      count++;

      //if we have run each task, we now want to 
      //invoke the call back and pass in the results of our tasks
      if(count === tasks.length){
        callback(results);
      }     
    });      
  });
};  