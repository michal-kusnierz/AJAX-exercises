var myPromise = Promise.resolve(111);

var myPromise2 = myPromise.then(function(val){
    val = val + val;
});

myPromise2.then(function(val){
    console.log(val);
}).catch(function(err){
    console.log("Error");
});

// output: Undefined
