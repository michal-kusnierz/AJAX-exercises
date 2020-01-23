const array = [1,2,3,4,5];

function isEven(x){ //checks if a value is even
   return x % 2 == 0; 
}

const newArray = array.filter(isEven); //uses a callback to check if an element is even

console.log(newArray);
// logs [2,4]