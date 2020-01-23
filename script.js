/*
DOM Events
*/

let value = 0;

document.getElementById("myButton").onclick = () => {
  value++;
  document.getElementById("myButton").innerHTML = value;
};
