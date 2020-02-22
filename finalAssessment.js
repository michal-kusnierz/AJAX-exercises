function* genFuncA() {
   yield 1;
   yield 2;

   return 3;
}

function* genFuncB(){
   yield 4;
   var temp = yield* genFuncA(); 
   yield 5;
   yield temp;

   return 6;
}

var arr = [...genFuncB()]
console.log(arr);


// output: [4,1,2,5,3]