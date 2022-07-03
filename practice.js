//Practice 

// 1. Concatenate messages 

// let firstName = "Adhwaita"
// let lastName = "Parikh" 
// let fullName = firstName + " " + lastName 
// console.log(fullName) 

// 2. Call the function

// function greet() {
//     let name = "Linda" 
//     let greeting = "Hi there" 
//     let myGreeting = greeting + ", " + name + "!" 
//     console.log(myGreeting) 
// } 
// greet()  

// 3. Call log to 10 using functions

// let myPoints = 3  


// function add3points() {
//     myPoints += 3
    
// } 

// function remove1point() {
//     myPoints -= 1 
// } 

// add3points()
// add3points()
// add3points()
// remove1point()
// remove1point()   

// console.log(myPoints) 

// console.log("2" + 2)  
// console.log(11 + 7) 
// console.log(6 + "5") 
// console.log("My Points: " + 5 + 9) 
// console.log(2 + 2) 
// console.log("11" + "14") 

// 4. Display error message when button clicked. 

// let errorEl = document.getElementById("error")
// function purchase() {
//     let error = "Something went wrong!"
//     let error2 = "Please try again." 
//     errorEl.textContent = error + " " + error2
// } 


// 5. Calculator 

// let num1 = 8
// let num2 = 2 

// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2 
// let sumEl = document.getElementById("sum-el") 
// function add() {       
//     let result = num1 + num2 
//     sumEl.textContent = "Sum: " + result
    
// }
// let subtractEl = document.getElementById("subtract-el") 
// function subtract() {  
//     let result = num1 - num2 
//     subtractEl.textContent = "Subtract: " + result
    
// }
// let multiplyEl = document.getElementById("multiply-el") 
// function multiply() {  
//     let result = num1 * num2 
//     multiplyEl.textContent = "Multiply: " + result
    
// }
// let divideEl = document.getElementById("divide-el") 
// function divide() {  
//     let result = num1 / num2 
//     divideEl.textContent = "Divide: " + result
    
// } 

//let player1Time = 102
// let player2Time = 99 

// function getFastestTime() { 
//     if(player1Time < player2Time){
//         return player1Time
//     } else if (player2Time < player1Time) { 
//         return player2Time
//     } else {
//         return player1Time
//     }
// } 
// let fastestTime = getFastestTime() 
// console.log(fastestTime)

// function totalTime() {
//     return player1Time + player2Time  
    

// }

// let totalRaceTime = totalTime() 
// console.log(totalRaceTime)


//let randomNumber = 
//console.log(randomNumber)  

// let flooredNum = Math.floor(Math.random() * 6) + 1
// console.log(flooredNum) 


// let courseCompleted = "true" 
// let getCertificate = "true" 

// if (courseCompleted === true && getCertificate === true) { 
//     generateCertificate() 
// }

// function generateCertificate() { 
//     console.log("Generating Certificate...") 
    
// }
// generateCertificate()
    

// let hasSolvedChallenge = "false" 
// let hasHintsLeft = "false" 

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }
    


// function showSolution() {
//     console.log("Showing Solutions...")  
// }

// let likeDocumentries = "true" 
// let likeMovies = "true" 

// if (likeDocumentries === false || likeMovies === true) {
//     recommendedMovies()
// }

// function recommendedMovies() {
//     console.log("Hey, check out this new film you'll like it")
// } 
// recommendedMovies() 

// let course = {
//     title: "Learn CSS for free" ,
//     lesson:16,
//     creator:"Per Harald Bergan",
//     length:60,
//     level:2,
//     isFree: "true",
//     tags: ["html", "CSS"]
// } 
//  console.log(course.creator) 

//Airbnb Castle Listing 

// let airbnbcastle = { 
//     castle: "Castle in Fife",
//     cost: 1089,
//     isFiveStar: "true", 
//     facilities: ["2 bedroom", "private pool", "6 beds"]
// } 

// console.log(airbnbcastle.castle, airbnbcastle.facilities) 

// Object and Function practice 

// let person = {
//     myName : "Adhwaita",
//     age : 20, 
//     country : "India",
//     logData : function() {  
//         console.log(person.myName + " " + "is" + person.age + " " + "years old and lives in " + person.country)
//     }
// } 

// person.logData() 

// let age = 72 

// if (age < 6) { 
//     console.log("Free") 
// } else if (age >= 6 && age <= 17) {
//     console.log("child discount") 
// } else if(age >= 18 && age <= 26) { 
//     console.log("student discount") 
// }else if(age >= 27 && age <= 66) { 
//     console.log("full price") 
// }else {
//     console.log("senior citizen discount")
// }
 

// For Loops and Arrays 

//let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// console.log("The 5 largest countries in the world: ")
// for (i = 0; i < largeCountries.length; i += 1) {
//     console.log("- " + largeCountries[i])  
// } 

// let countries = "China" 

// largeCountries.shift()
// largeCountries.unshift(countries) 

// let country2 = "Russia" 
// largeCountries.pop()  
// largeCountries.push(country2)

// console.log(largeCountries) 

// let dayOfMonth = 13 
// let weekDay = "friday" 

// if (dayOfMonth === 13 && weekDay === "friday") { 
//     console.log("You're Dead. HAHAHAHA")
// } 
 
// const recipient = "James" 
// const sender ="Adhwaita"
// const email = `Hey ${recipient} 
// How's it going?
// Cheers ${sender}`  
// console.log(email)

// let myLeads = `["www.examplelead.com"]`

// myLeads=JSON.parse(myLeads)  //Turning string into array
// myLeads.push("www.hamley.com") 
// myLeads = JSON.stringify(myLeads) //Turning array back to string
// console.log(typeof myLeads)  // Logging to verify if it's a string

//Truthy and Falsy Statements 

// 1. false 
// 2. null -> how developer signalizes emptiness
// 3. 0 
// 4. undefined -> how javascript signalizes emptiness
// 5.NaN -> not an number
// 6.""

    
// console.log (Boolean("")) // false
// console.log (Boolean("0")) // true
// console.log (Boolean(100)) // true
// console.log (Boolean(null)) // false
// console.log (Boolean([0])) // true
// console.log (Boolean(-0)) //false


// Function with single/multiple parameters

// sumEl = document.getElementById("sum-el")
// function greetUser(greeting, name) {
//   sumEl.textContent =  ` ${greeting}  ,  ${name} :) `
// }

// greetUser("Hello" , "Adhwaita") 

//Numbers as function parameters 

// function add(num1 , num2) {
//     console.log(num1 + num2) 
// }
// add(3,4)

// function add(num1 , num2) {
//     console.log(num1 + num2) 
// }
// add(9,102)


function getFirst(array) { 
    return array[0]
   
} 
 let firstName = getFirst(["Adhwaita", "Shruti"]) 
 console.log(firstName)