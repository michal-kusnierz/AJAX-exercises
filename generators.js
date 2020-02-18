/*
next() can also be used to send values back into Generator functions. 
This is accomplished by passing a value into the next() method call as an argument. 
The value that is passed into the next() method call eventually 
becomes the return value of the most recent yield statement.
 Since the first next() call starts the Generator function, 
 any value that gets passed into it will be ignored.
*/

 function* genFunc(){
  var a = yield;
  console.log(a); //a = 1
  var b = yield;  
  console.log(b); //b = 2
  var c = yield;
  console.log(c); //c = 3

}

var genObject = genFunc();

genObject.next(0); //starts genFunc(), the value inside the next() call is ignored
genObject.next(1); //sends a value of 1 to genFunc()
genObject.next(2); //sends a value of 2 to genFunc()
genObject.next(3); //sends a value of 3 to genFunc()