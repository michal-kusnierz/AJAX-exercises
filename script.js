/*
DOM Events
*/

let value = 0;

document.getElementById("myButton").onclick = () => {
  value++;
  document.getElementById("myButton").innerHTML = value;
};


document.addEventListener('keypress',handleKeyPress);

function handleKeyPress(event){
    var keyPressed= event.key; //event.key contains the key that was pressed
    document.getElementById("text").innerHTML = "Key Pressed: " +  keyPressed;
    //sets the HTML text to display the key pressed
} 