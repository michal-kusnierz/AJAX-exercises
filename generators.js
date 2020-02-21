function* genFunc(){
  var a = yield 1;
  var b = yield 2;
  var c = yield 3;
  return 4;
}

var sum = 0;

for (var a of genFunc()){
  sum += a;
}

console.log(sum);

// output: 6