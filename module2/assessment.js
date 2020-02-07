//Question 5 Code

function promiseSquare(val){
  return Promise.resolve(val * val);
}

function promiseDouble(val){
  return Promise.resolve(val + val);
}

var myPromise = Promise.resolve(1);

myPromise.then(function(val){
  var temp = val + 4;
  return promiseSquare(temp);

}).then(function(val){
  return promiseDouble(val);

}).then(function(val){
  console.log(val + 1);
});

// 51