/* Generator functions are initially paused and the first call to next()
 starts the Generator function. 
The Generator function then runs until it hits the first yield keyword and then pauses.
 Subsequent calls to next()  will resume the Generator function until the next yield keyword appears.

The next() method returns an object with two properties:
- done - a boolean indicating whether the Generator function has processed 
all of the yield statements or has already returned. 
- value - the value associated with the most recent yield statement. */

function* genFunc() {
  console.log("started");
  yield 'a';
  console.log("passed first yield");
  yield;
  console.log("passed second yield");
  yield 123;
  console.log("passed third yield");
      
  return "finished";
}

var genObject = genFunc();

var a = genObject.next(); 
var b = genObject.next(); 
var c = genObject.next(); 

var d = genObject.next(); // Object {value: "finished", done: true} <-- value property takes the return value of genFunc()
//console.log("passed third yield");

var e = genObject.next(); // Object {value: undefined, done: true} <-- additional next() calls return this