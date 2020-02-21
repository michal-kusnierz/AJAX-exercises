function* generatorFunction(){
  yield 1;
  return 2;
  yield 3;
}

var generatorObject = generatorFunction();
generatorObject.next();
generatorObject.next();
var result = generatorObject.next();
console.log(result.value);

// output: undefined