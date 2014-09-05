"use strict";

module.exports = function Counter(){
  // set counter to zero
  var counter = 0;
  // return value of counter
  this.getValue = function(){
    return counter;
  };
  // increment counter
  this.increment = function(){
    counter++;
  };

};
