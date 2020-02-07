/* 
Method
The method attribute is a string that is used to specify the HTTP request method type. 
Here is a list of some commonly used method types:

Get - used to retrieve an existing data resource
Head - used to retrieve HTTP headers
Post - used to create a new data resource
Put - used to create a new data resource or modify an existing data resource
Delete - used to delete a data resource

Notice how an init object with a method attribute of "Post" can be created:
*/

const initObject = {
  method: 'POST'
}