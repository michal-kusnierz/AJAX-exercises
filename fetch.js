/*
The fetch() method can take in a Request object instead of an URL and an init object. 
The Request constructor takes in the same parameters as the fetch() method: 
an URL and an optional init object. 

Request objects are used because they make Fetch requests a bit cleaner 
and also offer a bit more control.
*/

const initObject = {
    method: 'POST',
    headers: new Headers(),
    mode: 'cors',
    body: "{}" 
};

//creates a new request object using an URL and an init object
const request = new Request("https://jsonplaceholder.typicode.com/posts",initObject)

//fetch() method used with a request
fetch(request).then(result => {     
    //result contains a Response object
    return result.json() 
    //returns a Promise containing JSON data extracted from the Response object
}).then(result => {
    console.log(result);
    //logs Object {id: 101}
}).catch(err => {
    console.log(err);
});