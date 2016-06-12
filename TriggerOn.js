//eventing system with trigger and on methods
//on stores the callback in an array of event callbacks
//trigger invokes each callback and passes in the event as an argument to the callback

var mixEvents = function(obj) {
  //Your code here
  var events = {};
  events.callbacks = [];
var args = [];

  obj.trigger = function (event) {
    if(arguments.length > 1){
      args = Array.prototype.slice.call(arguments,1);
      
      for (var i = 0; i < events.callbacks.length; i++){
       events.callbacks[i](args[0],args[1]);
      }
    }
    
    for (var j = 0; j < events.callbacks.length; j++){
      events.callbacks[j](args[0],args[1]);
    }
  };

  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    //Your code here
   events.callbacks.push(callback);
  };
  
  return obj;
};