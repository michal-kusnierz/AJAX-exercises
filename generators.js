/*
For...Of statement is used to iterate through a Generator Object
*/

function* genFunc(){
  yield 'a';
  yield;  
  yield* [1,2,3];
  yield 123;

  return "finished";

}

for (var x of genFunc()){ //for...of statement
  console.log(x); 
}
// Outputs:
//'a'
// undefined
// 1
// 2
// 3
// 123
// <-- return value is not outputted