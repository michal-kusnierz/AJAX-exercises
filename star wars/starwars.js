function* gen() {
  if(document.getElementById("input").value > 7 || document.getElementById("input").value < 1 ){
    throw new Error("Invalid Input - Enter a number between 1 and 7");
  }
  const filmResponse = yield fetch("http://swapi.co/api/films/" + document.getElementById("input").value);
  const film = yield filmResponse.json();
}

const run = genFunc => {
  const genObject = genFunc();

  const iterate = iteration => {
    if (iteration.done) return Promise.resolve(iteration.value);
    return Promise.resolve(iteration.value)
      .then(x => iterate(genObject.next(x)))
      .catch(x => iterate(genObject.throw(x)));
  };

  try {
    return iterate(genObject.next());
  } catch (ex) {
    return Promise.reject(ex);
  }
};
