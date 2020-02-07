/* 
Headers
The `headers attribute is used to add more information about the resource being fetched 
or the client doing the fetching. 
A Headers object can be created using the new Headers() constructor 
and individual headers can be added to the Headers object through the append() method.

Notice how a new Headers object is created 
and assigned to the headers attribute of the init object:
*/
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const initObject = {
    headers: myHeaders
};