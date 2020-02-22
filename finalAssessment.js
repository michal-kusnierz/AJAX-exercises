const promise = Promise.reject("failure");

promise.then(val => {
    console.log("good");
  })
  .catch(err => {
    console.log("bad");
    return err;
  })
  .then(val => {
    console.log(val);
  });

/* output: 
bad
failure
*/
