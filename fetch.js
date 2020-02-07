/*
Request objects can be used more than once in Fetch requests 
that don't involve bodies(Head,Get)..
*/

const request = new Request("https://jsonplaceholder.typicode.com/todos/1");

fetch(request).then(result => {     
    console.log(result.status) //logs 200, OK fetch response
});

//reusing request object 
fetch(request).then(result => { 
    console.log(result.status) //logs 200, OK fetch response after reusing request object
});