var css = document.querySelector("span");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// Create a function to show the currently selected gradient
function setGradient() {
 body.style.background = 
 "linear-gradient(to right, " 
 + color1.value 
 + ", " 
 + color2.value 
 + ")";
 css.textContent = body.style.background + ";";
}
// Add Event listener to set gradient for both inputs
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    
    copyText.Select;
    
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }