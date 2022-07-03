// let firstBatch = 5
// let secondBatch = 9
// let count = firstBatch + secondBatch
// console.log(count)

// let myAge = 20
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoints = 50
// bonusPoints = bonusPoints - 25
// bonusPoints = bonusPoints + 100
// bonusPoints = bonusPoints + 70
// console.log(bonusPoints)


// function number() {
//     console.log(42)
// }
//call the function
// number() 


//  let value = 0
// // document.getElementById("count-el").innerHTML = value;
// function increment() {
//   var element = document.getElementById ("counterElement");

//   value = value + 1;
//   // console.log(value)
//   document.getElementById ("counterElement").innerText = value;
// }

// // document.getElementById("count-el").innerHTML = value;
// function decrement() {
//   var element = document.getElementById ("counterElement").innerText;
  
//   if (element != 0) {
//    value = value - 1; 
  
//   // console.log(value)
//   document.getElementById ("counterElement").innerText = value;
//   }
//   else{
//    console.log ("Found Counter Value 0... ");
//   }
// } 

// function save() {
// console.log(value)
// }


// let saveEl = document.getElementById("save-element") 
// let countEl = document.getElementById("counterElement")
// let count = 0;


// console.log(saveEl)  

// function increment() {   
//   count += 1
//   countEl.textContent = count 
 
// }


// function save() {
//     let countStr = count
//     let dashSeparator = " - " 
//     saveEl.textContent += countStr + dashSeparator  
//     countEl.textContent = 0    
//     count = 0
// }  

// let fruit = ["apple", "orange", "apple", "apple", "orange"] 

// appleEl = document.getElementById("apple-shelf") 
// orangeEl = document.getElementById("orange-shelf")

// function sortFruit() {   
//   for (i = 0; i < fruit.length ; i ++)  
//   if ( fruit[i] === "apple" ) {
//       appleEl.textContent += "apple" 
//     } else if(fruit[i] === "orange") {
//       orangeEl.textContent += "orange" 
//     }    
// }
// sortFruit()

// let openBox = document.getElementById("box") 

// openBox.addEventListener( "click", function(){
//   console.log("I want to open the box!")
// }) 
const containerEl = document.getElementById("container")
containerEl.innerHTML = "<button onclick = 'buy()'> Buy!</button>" 

function buy() {
  containerEl.innerHTML += "<p>Thank you for buying!</p>"
}
buy()