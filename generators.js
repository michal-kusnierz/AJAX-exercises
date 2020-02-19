/*
Using Generators with Asynchronous Functions

~ES6 syntax
*/
function* genFunc() {
  var post1title = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(post1title);
  var post2title = yield fetch("https://jsonplaceholder.typicode.com/posts/2");
  console.log(post2title);
}

var genObject = genFunc();

var yieldedObject = genObject.next();
var promise = yieldedObject.value;
promise
  .then(val => {
    return val.json();
  })
  .then(val => {
    var secondYieldedObject = genObject.next(val.title);
    var secondPromise = secondYieldedObject.value;
    secondPromise
      .then(val => {
        return val.json();
      })
      .then(val => {
        genObject.next(val.title);
      });
  });
