// Question 7 Code

fetch("https://jsonplaceholder.typicode.com/comments/12").then(function(val){
    return val.json();
}).then(function(val){
    var postId = val.postId;
    return fetch("https://jsonplaceholder.typicode.com/posts/"  + postId);
}).then(function(val){
    return val.json();
}).then(function(val){
    console.log(val.body);
}).catch(function(err){
    console.log("Error")
});

// answer: console logs: et iusto sed quo iure...