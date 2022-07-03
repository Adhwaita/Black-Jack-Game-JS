// Function to increment and decrement of the value.

let value = 0;

// document.getElementById("count-el").innerHTML = value;
function increment() {
  var element = document.getElementById("counterElement");

  value += 1;
  // console.log(value)
  document.getElementById("counterElement").innerText = value;
}

// document.getElementById("count-el").innerHTML = value;
function decrement() {
  var element = document.getElementById("counterElement").innerText;
  
  if (element != 0) {
   value = value - 1; 
  
  // console.log(value)
  document.getElementById("counterElement").innerText = value;
  }
  else{
   console.log("Found Counter Value 0... ");
  }
} 


