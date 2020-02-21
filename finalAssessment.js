setTimeout(function(){
  console.log(1);
},500);

setTimeout(function(){
  console.log(2);
},1000);

setTimeout(function(){
  console.log(3);
},0);

setTimeout(function(){
  console.log(4);
},10);

console.log(5);
console.log(6);


// output:

/* 
  5
  6
  3
  4
  1
  2
*/