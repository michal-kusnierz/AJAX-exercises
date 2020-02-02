const promise = new Promise((resolve, reject) => {
  setTimeout(function(){
    const val = Math.random();
    if (val > 0.5){
      resolve(val);
    }
    else {
      reject(val);
    }
  },5000);
});

promise.then((val) => {
  console.log('success: '+ val);

}).catch((err)=>{
  console.log('error: ' + err);
});
