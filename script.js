/*
DOM Events
*/

let value = 0;

document.getElementById("myButton").addEventListener("click", () => {
  value++;
  document.getElementById("myButton").innerHTML = value;
});
