/*
The Promise.race() method takes in an array of promises 
and takes the result of the promise that rejects or resolves the fastest.
*/

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise1 finished in two seconds");
    },2000) //returns a resolved promise after 2 seconds
});

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise2 finished in five seconds");
    },5000) //returns a resolved promise after 5 seconds
});


Promise.race([promise1,promise2]).then((result)=>{ 

    console.log(result) // logs "finished in two seconds" because promise1 resolved first

}).catch((error)=>{

    console.log(error)  

});