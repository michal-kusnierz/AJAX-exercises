/*
Promise.race() method used to limit the amount of time a Promise has to resolve:
*/

const promiseResolveTenSeconds = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("finished in ten seconds");
    },10000) //returns a resolved promise after 2 seconds
});

const promiseRejectFiveSeconds = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("error: promise took longer than 5 seconds to resolve");
    },5000) //returns a rejected promise after 5 seconds
});


Promise.race([promiseResolveTenSeconds,promiseRejectFiveSeconds]).then((result)=>{ 

    console.log(result) // never occurs because promiseRejectFiveSeconds rejected

}).catch((error)=>{

    console.log(error)  // logs "error: promise took longer than 5 seconds to resolve"

});