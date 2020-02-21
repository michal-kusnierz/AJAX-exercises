function* generatorFunction(){
  yield 1;
  var a = 2;
  yield 3;
  var b = 4;
  return 5;
}

var generatorObject = generatorFunction();

var a = generatorObject.next();
var b = generatorObject.next();
console.log(b.value);

// output: 3