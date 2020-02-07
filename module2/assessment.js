//Question 2 Code

var myPromise = Promise.reject("hello");

myPromise.then(function(val){
    console.log("success: " + val);
},function(err){
    console.log("error: " + err);
});

// answer: 'error: hello'