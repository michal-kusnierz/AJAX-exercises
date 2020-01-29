let time = 0;
let started;
let interval;
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const recordBtn = document.getElementById('record');
const recordList = document.getElementById('record_list');

const clock = () => {
  time++;
  timer.innerHTML = time;
};

const startTimer = () => {
  interval = setInterval(clock, 10);
  started = true;
  recordBtn.addEventListener('click', recordTimer);
};

const stopTimer = () => {
  clearInterval(interval);
  started = false;
};

const toggleTimer = () => {
  if (!started) {
    startTimer()
  } else {
    stopTimer()
  }
};

const resetTimer = () => {
  stopTimer();
  time = 0;
  timer.innerHTML = time;
  recordList.innerHTML = 'Past Times';
};

const recordTimer = () => {
  let record = document.createElement('li');
  record.textContent = time + ' ms';
  recordList.appendChild(record);
};

startBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);
