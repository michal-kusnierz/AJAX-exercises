/*
Asynchronous Code Using Timers
*/

const asyncLog = val => {
  //logs values asynchronously
  setTimeout(() => {
    //setTimeout with a time of 0 will execute asynchronously
    console.log(val);
  }, 0);
};

setTimeout(() => {
  console.log("first");
}, 0);
asyncLog("second"); // "second" will be printed last as async func
console.log("third");
