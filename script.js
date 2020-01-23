const array = [1, 2, 3, 4, 5];

const newArray = array.map(x => {
  //uses an anonymous callback function to square each element
  return x * x;
});

console.log(newArray);
// logs [1,4,9,16,25]
