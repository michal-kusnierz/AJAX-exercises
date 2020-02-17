/* 
The yield* statement does not add the return value of the generator function
 that it calls to its list of iterables. 
Instead, the return value may be accessed by the return value of the yield* statement.
*/

function* genFuncA() {
  yield 'a';
  yield 'b';

  return "done with genFuncA()!"
}

function* genFuncB(){
  yield 1;
  var returnVal = yield* genFuncA();  // contains iterable list [a,b] and returns with value "done with genFuncA()!"
  yield returnVal;                    // returnVal is equal to"done with genFuncA()
  yield 2;

  return "done with genFuncB()!";
}

var genObject = genFuncB();

var a = genObject.next();       //Object {value: 1, done: false}
var b = genObject.next();       //Object {value: 'a', done: false}
var c = genObject.next();       //Object {value: 'b', done: false}
var d = genObject.next();       //Object {value: "done with genFuncA()!", done: false}
var e = genObject.next();       //Object {value: 2, done: false}
var f = genObject.next();       //Object {value: "done with genFuncB()!", done: true}