function* genFunc(){
  var a = yield 'hello';
  var b = yield 'world';
  return "goodbye";
}

var genObject = genFunc();

genObject.next();
var result = genObject.return("done");
console.log(result.value);

// output: 'done'
