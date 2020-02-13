/*
Generators are functions that can be paused and resumed. 
Generators can send out values when pausing and take in values when resuming.

Generators are important because they allow asynchronous functions to written
 like normal synchronous functions.
*/


// Generator function syntax:
function* genFunc() {
  yield 'a';
  yield;
  yield 123;
      
  return "finished";
}

