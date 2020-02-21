function* gen() {}

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
