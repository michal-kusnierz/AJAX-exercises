/*
DOM Events
*/

let value = 0;

document.getElementById("myButton").onclick = () => {
  value++;
  document.getElementById("myButton").innerHTML = value;
};


const handleKeyPress = event => {
  let keyPressed = event.key; 
  document.getElementById("text").innerHTML = "Key Pressed: " +  keyPressed;
}; 

document.addEventListener('keypress',handleKeyPress);
