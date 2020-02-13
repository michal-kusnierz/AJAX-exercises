// Question 1 Code

fetch("https://jsonplaceholder.typicode.com/todos/15").then(function(val){
    console.log(val);
}).catch(function(err){
    console.log("Error")
});;

// answer: A Response object will be logged

