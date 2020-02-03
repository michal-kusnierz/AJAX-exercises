/*
Promise results can be transformed by calling the return statement within the then() callback. 
This will cause the then() method to return a new Promise with the transformed result.
*/

const promise = Promise.resolve("hello");

const promise2 = promise.then((result)=>{ 
    console.log(result) //logs "hello"
    return result + " world" //adds " world" to the result and sets this as the new fulfillment value of promise2
});

promise2.then((result)=>{
    console.log(result); //logs "hello world"
});

