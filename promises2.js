/*
The Promise.all() method is used to process multiple Promises at the same time. 
The method takes in an array of Promises and then waits for them to all to resolve. 
Once they have all finished resolving, an array of results can be obtained 
by using the then() method. 
If any of the Promises reject, then the Promise.all() method will return the first rejected Promise.
*/

const promise1 = Promise.resolve('hello'); 
const promise2 = Promise.resolve({age:2,height:188}) 
const promise3 = 42; //normal values work with Promise.all() too


Promise.all([promise1,promise2,promise3]).then(function(result) { 

    console.log(result) //logs the array ["hello",{age:2,height:188},42]

}).catch(function(error){

    console.log(error) 

});