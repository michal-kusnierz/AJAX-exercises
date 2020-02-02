const promiseBtn = document.getElementById('promiseBtn');

const promiseFun = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function(){
      const val = Math.random();
      if (val > 0.5){
        resolve(val);
      }
      else {
        reject(val);
      }
    },2000);
  });

  promise.then((val) => {
    console.log('success: '+ val);

  }).catch((err)=>{
    console.log('error: ' + err);
  });
}

promiseBtn.addEventListener('click',promiseFun);