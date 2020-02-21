function delayedPromiseDouble(val) {
  var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(val + val);
    }, 2000);
  });
  return promise;
}

function delayedPromiseSquare(val) {
  var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(val * val);
    }, 2000);
  });
  return promise;
}

function* genFunc() {
  var a = yield delayedPromiseDouble(5);
  var b = yield delayedPromiseSquare(a);
  console.log(a + "," + b);
}

var genObject = genFunc();

function run(gen) {
  var genObject = gen();
  var temp = genObject.next();
  var promise = temp.value;
  promise.then(function(val) {
    var temp2 = genObject.next(val);
    var secondPromise = temp2.value;
    secondPromise.then(function(val) {
      genObject.next(val);
      return val;
    });
  });
}

run(genFunc);
// output: 10,100
