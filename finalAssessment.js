const initObject = { 
   method: 'POST',
   mode: 'cors',
   body: '{}',
   headers: new Headers()
};

const request= new Request("https://jsonplaceholder.typicode.com/posts",initObject);

//first fetch
fetch(request).then(val => {
    return val.json();
}).then(val => {
    console.log("Success");
}).catch(err => {
    console.log("Error")
});

//second fetch
fetch(request).then(val => {
    return val.json();
}).then(val => {
    console.log("Success 2");
}).catch(err => {
    console.log("Error 2")
});


// answer: The first fetch request will succeed but the second request will fail
