/* 
Mode
The mode attribute is a string that is used to determine 
whether or not the Fetch request can fetch resources from different servers.

In this course we will cover the following two mode types:

- same-origin - the Fetch request can only fetch resources from the same server
- cors (cross origin HTTP request) - the Fetch request can fetch resources from different servers


Notice how an init object is created with a mode attribute set to 'cors':
*/

const initObject = {
    mode: 'cors'
};