//Question 8 Code

function timedReject(val){
  var promise = new Promise(function(resolve,reject){
      setTimeout(function(){
          reject(val)
      },2000);
  });
  return promise;
}

function timedResolve(val){
  var promise = new Promise(function(resolve,reject){
      setTimeout(function(){
          resolve(val)
      },3000);
  });
  return promise;
}

var myPromise1 = Promise.resolve("okay");
var myPromise2 = timedReject("bad")
var myPromise3 = timedResolve("good")

Promise.race([myPromise1,myPromise2,myPromise3]).then(function(val){
  console.log(val);
}).catch(function(err){
  console.log("Error: " + err)
})

// okay