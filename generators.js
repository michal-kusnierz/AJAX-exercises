function* genFunc(){
  var a = yield 1;
  var b = yield a * 2;
  var c = yield b + a;
  return a + b + c;
}

var genObject = genFunc();

var a = genObject.next(1);
var b = genObject.next(2);
var c = genObject.next(3);
var d = genObject.next(4);

console.log(d.value);

// output: 9