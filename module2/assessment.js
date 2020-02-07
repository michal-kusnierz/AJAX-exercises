//Question 1 Code

var myPromise = new Promise(function(resolve,reject){
  var value = {age:20,id:123};

  if (value.age > 18){
      resolve(value);
  }
  else
      reject(Error("age < 18"));
});

myPromise.then(function(val){
   console.log(val.id);
}).catch(function(err){
   console.log(err.message);
});  

// answer: output is '123'