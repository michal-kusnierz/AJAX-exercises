const promiseDiv = document.getElementById('promise');
const promiseBtn = document.getElementById('promiseBtn');
const promiseDisplay = document.createElement('p');
    
const promiseFun = () => {
  const promise = new Promise((resolve, reject) => {
    promiseDisplay.innerHTML='waiting...';
    promiseDiv.appendChild(promiseDisplay);

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
    promiseDisplay.innerHTML = 'success: ' + Math.ceil(val);

  }).catch((err)=>{
    console.log('error: ' + err);
    promiseDisplay.innerHTML = 'error: ' + Math.floor(err);
  });
}

promiseBtn.addEventListener('click',promiseFun);