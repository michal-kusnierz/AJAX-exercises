/* 
The yield* statement can be used on any iterable in addition to Generator functions.
*/

function* genFunc(){
  yield 1;
  yield* [2,3,4]; //the array [2,3,4] is iterable
  yield 5;

}

var genObject = genFunc();

var a = genObject.next(); //Object {value: 1, done: false}
var b = genObject.next(); //Object {value: 2, done: false}
var c = genObject.next(); //Object {value: 3, done: false}
var d = genObject.next(); //Object {value: 4, done: false}
var e = genObject.next(); //Object {value: 5, done: false}
var f = genObject.next(); //Object {value: undefined, done: true}