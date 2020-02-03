/*
Notice how Promise.all() method call rejects 
when one of the Promises that it is processing rejects:
*/

const promise1 = Promise.resolve("hello");
const promise2 = Promise.resolve({ age: 2, height: 188 });
const promise3 = Promise.reject("failure."); //rejected promise

Promise.all([promise1, promise2, promise3])
  .then(result => {
    console.log(result); //doesn't occur since promise3 rejected
  })
  .catch(error => {
    console.log(error); //logs 'failure.'
  });
