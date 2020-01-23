/*
setInterval
*/

let count = 0;

const interval = setInterval(() => {
  count++;
  console.log(count);
  if (count >= 3) {
    clearInterval(interval);
  }
}, 1000);
