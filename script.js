/*
setTimeout
clearTimeout
*/

const timeout = setTimeout(function() {
  console.log("hello");
}, 1000);

clearTimeout(timeout);