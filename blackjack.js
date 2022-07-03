// Black Jack Game

   
   let sum = 0  
   let cards = [] 
   let hasBlackJack = false 
   let isAlive = false
   let message = ""  
   
   //console.log(cards)

let player = {
  playerName : "Adhwaita", 
  chips : 178
}   

let playerEL = document.getElementById("player-element")    
playerEL.textContent = player.playerName + " : $" + player.chips
   


let messageEl = document.getElementById("message-element")
let sumEl = document.querySelector("#sum-element") 
let cardEl = document.querySelector("#card-element")  

function getRandomCard() { 
  let randomNumber = Math.floor(Math.random() * 13) + 1 
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1){
    return 11 
  } else {
    return randomNumber
  }  
  
}  


function startGame(){ 
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard() 
   cards = [firstCard, secondCard] 
   sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardEl.textContent = "Cards: " 
  for (i = 0; i < cards.length; i += 1) {
    cardEl.textContent += cards[i] + " "
  }
  if (sum <= 20) {
      message = "Do you want to draw a new card?"
  } else if (sum === 21) {
      message = "Woah, You've won the game!"
      hasBlackJack = true
  } else {
      message = "You're out of the game!" 
      isAlive = false
  }  
    messageEl.textContent = message 
    sumEl.textContent = "Sum: " + sum

} 


function newCard() {
  if (isAlive === true && hasBlackJack === false) {    
  
  let card = getRandomCard()
  sum += card
  sumEl.textContent = "Sum: " + sum 
  cards.push(card)  
  renderGame()
  }
 }  

 

 
 
 
 
 



  


//console.log(isAlive)
//  console.log(hasBlackJack)



// let age = 100

// if (age < 100) { 
//     console.log("You're not eligible")
// } else if (age === 100) {
//     console.log("Here is your Birthday card from King!") 
// } else {
//     console.log("Not eligible, you've gotten already.")
// } 


//  let sentence = ["Hello,", "my", "name", "is", "Adhwaita"] 
//  let greetingEL = document.getElementById("greeting-element") 

//  for ( i = 0; i < sentence.length; i++) {
//   greetingEL.textContent += sentence[i] + " "
//  }
