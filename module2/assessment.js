//Question 3 Code

var myPromise = Promise.reject("123");

myPromise.then(function(err){
    console.log("error: " + err);
});

// no console output