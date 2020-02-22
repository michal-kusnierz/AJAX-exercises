function* genFunc(){
   var a = yield 50; 
   var b = yield (a * 5);
   var c = yield (b + a);
   return a + b - c;
}

var genObject = genFunc();

var a = genObject.next(100);
var b = genObject.next(200);
var c = genObject.next(b.value / 10);
var d = genObject.next(c.value);

console.log(d.value);

// output: 0