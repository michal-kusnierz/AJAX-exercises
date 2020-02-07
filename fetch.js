//fetching a bad url
fetch("https://jsonplaceholder.typicode.com/bad_url/1")
  .then(result => {
    //contains a Response object
    console.log(result);
    if (result.ok) {
      //returns true if the Response status is within 200-299
      return result.text();
    } else {
      //if the fetch request had problems
      console.log(result.status); 
      //logs 404
      return Promise.reject(result.status); 
      //returns a rejected promise if the fetch request had problems
    }
  })
  .then(result => {
    console.log(result); 
    //doesn't occur since a rejected promise was returned earlier
  })
  .catch(err => {
    console.log("Error: " + err); 
    //logs "Error: 404", handles the rejected promise
  });
