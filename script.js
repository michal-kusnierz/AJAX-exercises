const slowTask = () => {
  console.log("slow task finished");
};

const asyncSlowTask = val => {
  setTimeout(slowTask, 2000);
};

const fastTask = () => {
  console.log("fast task finished!");
};

fastTask();
asyncSlowTask();
fastTask();
asyncSlowTask();
fastTask();
fastTask();
