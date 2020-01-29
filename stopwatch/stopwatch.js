let time = 0;
let started;
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
  started = true;
}

const stopTimer = () => {
  clearInterval(interval);
  started = false;
}

const toggleTimer = () => {
  if (!started) {
    startTimer()
  } else {
    stopTimer()
  }
}
startBtn.addEventListener('click', toggleTimer);
