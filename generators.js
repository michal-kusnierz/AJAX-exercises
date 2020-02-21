function* genFunc(){
  var a = yield 1;
  var b = a + (yield a + 100);
  var c = 2 * (yield b - a);
  return a + b + c;
}

var genObject = genFunc();

var a = genObject.next(10)
var b = genObject.next(20)
var c = genObject.next(b.value)
var d = genObject.next(c.value)

console.log(d.value);

// output: 400