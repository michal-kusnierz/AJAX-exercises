const timedReject = (val, time) => {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject(val);
    }, time);
  });
  return promise;
};

const timedResolve = (val, time) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, time);
  });
  return promise;
};
const myPromise1 = timedReject(1, 200);
const myPromise2 = timedResolve(2, 400);
const myPromise3 = timedResolve(3, 300);

const myPromise4 = Promise.all([myPromise1, myPromise2]).then(() => {
  return 4;
});

Promise.race([myPromise3, myPromise4])
  .then(val => {
    console.log(val);
  })
  .catch(err => {
    console.log("Error: " + err);
  });

// output: Error: 1
