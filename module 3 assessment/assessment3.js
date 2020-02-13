// Question 2 Code

fetch("https://jsonplaceholder.typicode.com/todos/15").then(function(val){
    return val.json();
}).then(function(val){
    console.log([val.title]);
}).catch(function(err){
    console.log("Error")
});;


// answer: [INSERT 1] = val.json(),[INSERT 2] = val.title
// → the code output "ab voluptatum amet voluptas"