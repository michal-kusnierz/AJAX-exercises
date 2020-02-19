/*
destructuring assignment used to iterate through a Generator object:
*/

function* genFunc(){
  yield 'a';
  yield;  
  yield* [1,2,3];
  yield 123;

  return "finished";

}

var [a,b,c,d,e,f,g] = genFunc(); //destructuring assignment
// a = 'a'
// b = undefined
// c = 1
// d = 2
// e = 3
// f = 123
// g = undefined <-- g is undefined because there are no more yields