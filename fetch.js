// json() method is used to extract a JSONobject:
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(result => {
    return result.json(); 
    //returns a promise containing the JSON data extracted from the Response object
  })
  .then(result => {
    console.log(result);
    //logs Object {completed: false, id: 1, title: "delectus aut autem", userId: 1}
  });


// text() method is used to extract a text string:
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(result => {
    return result.text(); 
    //returns a promise containing the text data extracted from the Response object
  })
  .then(result => {
    console.log(result);
    //logs "{completed: false, id: 1, title: "delectus aut autem", userId: 1}"
  });
