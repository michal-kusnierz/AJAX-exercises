var clickedArray = [];
const clickedArray = [];

const randomAnswers = () => {
  const answers = [1, 1, 2, 2, 3, 3, 4, 4, 5];
  answers.sort(item => {
    return 0.5 - Math.random();
  });
  return answers;
};

const setUp = () => {
  const grid = document.getElementsByTagName("td");
  const answers = randomAnswers();

  for (let i = 0; i < grid.length; i++) {
    let cell = grid[i];
    cell.completed = false;
    cell.clicked = false;
    cell.value = answers[i];

    cell.addEventListener("mouseenter", function() {
      if(this.completed == false && this.clicked == false)
        this.style.background = "orange";
    });
    cell.addEventListener("mouseleave", function() {
      if(this.completed == false && this.clicked == false)
        this.style.background = "blue";
    });
    cell.addEventListener('click',function() {

    });
  }
};

setUp();