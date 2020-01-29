let time = 0;
let started = false;
let interval;
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const recordBtn = document.getElementById('record');

const clock = () => {
  time++;
  timer.innerHTML = time;
}

const startTimer = () => {
  interval = setInterval(clock, 10);
  startBtn.removeEventListener('click',startTimer);
  startBtn.addEventListener('click', stopTimer);
}

const stopTimer = () => {
  clearInterval(interval);
  startBtn.addEventListener('click', startTimer);
}

startBtn.addEventListener('click', startTimer);
