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

// anonymous callback:
let c = calculate(10, 5, function(x, y) {
  return x - y; //subtracts y from x
});
console.log(c); // logs 5

// anonymous using arrow function
let d = calculate(10, 5, (x, y) => {
  return x - y;
});
console.log(d);
