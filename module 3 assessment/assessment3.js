// Question 6 Code

var initObject = { method: 'GET',
                   mode: 'same-origin',
                   headers: new Headers()};

fetch("https://jsonplaceholder.typicode.com/todos/15",initObject).then(function(val){
    return val.text();
}).then(function(val){
    console.log(val);
}).catch(function(err){
    console.log(err)
});

// answer: replace mode 'same-origin' with 'cors'