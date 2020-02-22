function* genFunc() {
  var a = yield 333;
  var b = yield fetch("https://jsonplaceholder.typicode.com/comments/" + a);
  var c = yield b.json();
  var d = yield fetch("https://jsonplaceholder.typicode.com/posts/" + c.postId);
  var e = yield d.json();
  var f = yield fetch("https://jsonplaceholder.typicode.com/users/" + e.userId);
  var g = yield f.json();
  var h = g.username;

  console.log(h);
}

const run = genFunc => {
  const genObject = genFunc();

  function iterate(iteration) {
    if (iteration.done) return Promise.resolve(iteration.value);
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

run(genFunc);

// output: Elwyn.Skiles
