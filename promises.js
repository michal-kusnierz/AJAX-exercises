/*
The new Promise() constructor is called to create a new promise. 
The constructor takes in a callback function with the arguments resolve and reject.
*/
const promise = new Promise(function(resolve, reject) {

  //do stuff

  let isSuccessful = true;
  setTimeout(function(){
    if (isSuccessful) { //if everything is successful
      resolve("Success!");
    }
    else {              //if something went wrong
        reject(Error("Failure."));
    }
  },5000);

});

//promise status changes from pending to resolved after 5 seconds
promise.then(function(val){ //val represents the fulfillment value
  console.log(val);         //logs "success!" since promise resolved

}).catch(function(val){     //val represents the rejection value
  console.log(val);         //doesn't occur since promise never rejected

});

/*
The resolve function can take in any object as an argument, 
but one common practice is to pass in a Error object 
because it provides a more detailed error report.
*/