//Question 7 Code

function promiseSquare(val){
  return Promise.resolve(val * val);
}

function promiseDouble(val){
  return Promise.resolve(val + val);
}

function filterFunction(val){
  if ( val > 50)
      return true;
  else
      return false;
}

var myPromise1 = Promise.resolve(500);
var myPromise2 = promiseSquare(10);
var myPromise3 = promiseDouble(20);

Promise.all([myPromise1,myPromise2,myPromise3]).then(function(val){
  var result = val.filter(filterFunction);
  return result;

}).then(function(val){
  var temp = 0;
  for(var i = 0; i < val.length; i++){
      temp += val[i]
  }
  console.log(temp);

}).catch(function(err){
  console.log("Error: " + err)
});

// output to the console: 600