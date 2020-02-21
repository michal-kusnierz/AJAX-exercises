function* genFuncA() {
  yield 1;
  yield* genFuncB();
  return 2;
}

function* genFuncB() {
  yield 4;
  yield 5;
  return 6;
}

var genObject = genFuncA();

do {
  var step = genObject.next();
  console.log(step.value);
} while (step.done == false);

/* output: 
  1
  4
  5
  2
*/