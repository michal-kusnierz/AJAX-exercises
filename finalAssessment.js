function myFunction(x,doStuff){
  doStuff(x + x);
}

myFunction(5,function(x){
   myFunction(x + 3,function(x){
      var result = x - 3;
      myFunction(result,function(x){
          console.log(x);
      })
   })
})

// output: 46