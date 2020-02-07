const URL = 'https://jsonplaceholder.typicode.com/posts'

const body = {id:'123', title:'abc'};

const initObject = {
    method: 'POST',
    body: JSON.stringify(body)
};

fetch(URL,initObject)
    .then(result =>{
        return result.json();
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });