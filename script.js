function mult(x, y) {
  return x * y;
}

function add(x, y) {
  return x + y;
}

function calculate(x, y, compute) {
  return compute(x, y);
}

let a = calculate(10, 5, add);
console.log(a); 

let b = calculate(10, 5, mult);
console.log(b); 