/*
If a rejected Promise is yielded, the run() method will stop iterating through the Generator function
 and return a rejected Promise.
*/

const run = genFunc => {
  const genObject = genFunc(); 

  const iterate = iteration => {
    if (iteration.done)
      return Promise.resolve(iteration.value);
    return Promise.resolve(iteration.value)
      .then(x => iterate(genObject.next(x)))
      .catch(x => iterate(genObject.throw(x)));
  }

  try {
    return iterate(genObject.next());
  } catch (ex) {
    return Promise.reject(ex);
  }
};

function *gen2(){
  const post1Stream = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post1 = yield post1Stream.json();
  console.log(post1.title); 
  const post2Stream = yield fetch("https://jsonplaceholder.typicode.com/posts/2");
  const post2 = yield post2Stream.json();
  console.log(post2.title);

  const error = yield Promise.reject(Error("error message!"));

  const number = yield 12345;
  console.log(number);

  return 'done';
}

run(gen2).then(x => console.log(x))
  .catch(err => console.log(err.message));