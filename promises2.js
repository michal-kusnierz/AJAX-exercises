/*
Returning another Promise within a then() callback 
will cause the then() method to return the returned Promise.
*/

const promise = Promise.resolve("hello");

const promise2 = promise.then((result)=>{ 
    console.log(result) //logs "hello"
    return Promise.resolve("12345") 
                            //causes then() to return a promise with a fulfillment value of "12345"

});

promise2.then((result)=>{
    console.log(result);    //logs "12345"
});