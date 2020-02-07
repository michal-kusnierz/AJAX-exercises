//Question 4 Code

var myPromise = Promise.resolve(["hello","world","goodbye"]);

var anotherPromise = myPromise.then(function(val){
    return val.map( x => x + "!"); 
}).then(function(val){
    return val[2] + " " + val[1];
});

anotherPromise.then(function(val){
    console.log(val + '?');
})

// goodbye! world!?