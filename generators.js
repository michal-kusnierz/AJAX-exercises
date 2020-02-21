function* genFunc(){
  var a = yield 8;
  var b = yield fetch("https://jsonplaceholder.typicode.com/comments/"  + a);
  var c = yield b.json();
  var d = c.postId;
  var e = yield fetch("https://jsonplaceholder.typicode.com/posts/"  + d);
  var f = yield e.json();
  var g = f.body;
  console.log(g);
}

run(genFunc);

function run(genFunc){
  const genObject = genFunc();

  function iterate(iteration){
      if(iteration.done)
          return Promise.resolve(iteration.value);
      return Promise.resolve(iteration.value)
                    .then( x => iterate(genObject.next(x)))
                    .catch( x => iterate(genObject.throw(x)));

  }
  try{
      return iterate(genObject.next());
  }
  catch(ex){
      return Promise.reject(ex);
  }
}

// output: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
