const randomAnswers = () => {
  const answers = [1, 1, 2, 2, 3, 3, 4, 4, 5];
  answers.sort(item => {
    return 0.5 - Math.random();
  });
  return answers;
};
