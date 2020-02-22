fetch("https://jsonplaceholder.typicode.com/comments/222").then(val => {
    return val.json();
}).then(val => {
    var postId = val.postId;
    return fetch("https://jsonplaceholder.typicode.com/posts/"  + postId);
}).then(val => {
    return val.json();
}).then(val => {
    var userId = val.userId;
    return fetch("https://jsonplaceholder.typicode.com/users/"  + userId);
}).then(val => {
    return val.json();
}).then(val => {
    console.log(val.username);
}).catch(err => {
    console.log("Error")
});


// output: Kamren