const promiseIndex = (val,index) => {
   return Promise.resolve(val[index]);
};

const promiseArray = x => {
   return Promise.resolve([x,x+1,x+2]);
};

const myPromise = Promise.resolve([1,3,5,7]);

myPromise.then(val => {
   return  val.map(x => x + x);
}).then(val => {
   return promiseIndex(val,2);
}).then(val => {
   return val + 5;
}).then(val => {
   return promiseArray(val);
}).then(val => {
   return promiseIndex(val,1);
}).then(val => {
   console.log(val);
});

// output: 16