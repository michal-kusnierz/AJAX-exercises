/* 
Body
The body attribute is a JSON string used to send data along with a fetch request. 
If the body value is an object, it is important to stringify the object 
that is being sent using JSON.stringify() 
or it will not process correctly.

Get and Head HTTP requests can not have bodies.

Notice how an init object with a body attribute representing an object can be created:
*/

const myBody = {
    id: 12345,
    name: 'abc',
    age: 21
};


const initObject = {
    body: JSON.stringify(myBody)
};