fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(result => {
    return result.json();
  })
  .then(result => {
    console.log(result);
    //logs Object {completed: false, id: 1, title: "delectus aut autem", userId: 1}
  })
  .catch(err => {
    console.log(err);
  });
