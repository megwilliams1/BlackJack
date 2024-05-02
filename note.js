// let myPoints = 3

// function add3Points() {
//     myPoints += 3
// }

// function remove1Points() {
//     myPoints -= 1
// }

// console.log(myPonts)

// console.log("2" + 2) "22"
// console.log(11 + 7) 18
// console.log(6 + "5") "65"
// console.log("My points: " + 5 + 9) "My points: 59"
// console.log(2 +2) 4
// console.log("11" + "14")  "1114"

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" to the paragraph
// that has the id="error"
// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)
// function purchase () {
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again"
// }
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
// e.g if the user clicks on the "plus", you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
// let num1 = 8
// let num2 = 2
// document.getElementId("num1-el").textContent = num1
// document.getElementId("num2-el").textContent = num2
// function add(){
//     console.log("add clicked")
// }
// function subtract(){
//     console.log("subtract clicked")
// }
// function divide(){
//     console.log("multiply clicked")
// }
// function multiply(){
//     console.log("divide clicked")
// }

// let sumEl = document.getElementId("sum-el")
// function add(){
//     let result = num1 + num2
//     sumEl.textContent = "Sum: " + result
// }
// function subtract(){
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result
// }
// function divide(){
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result
// }
// function multiply(){
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// }



// HTML NOTES:

// <span id="num1-el"></span>
// <span id="num2-el"></span>
// <br>
// <button onclick="add()">Add</button>
// <button onclick="subtract()">Subtract</button>
// <button onclick="multiply()">Divide</button>
// <button onclick="divide()">Multiply</button>
// <br>
// <span id="sum-el">Sum: </span>

// let firstCard = 4
// let secondCard = 9

// let sum = firstCard + secondCard

// if (sum < 21) {
//     console.log("Do you want to draw a new card? 🤗")
// } else if (sum === 21) {
//     console.log("wohoo! You've got Blackjack! 😁")
// } else if (sum > 21) {
//     console.log("You're out of the game! 😊")
// }

// let age = 20

// if (age <= 20) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one!")
// }


// let experience = ["Full stack Devloper", "Learnig JavaScript", "Certified on FreeCodeCamp"]

// let cards = [7, 4]

// cards.push(6)
// console.log(cards)

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good, Been working on my portfolio lately."
]
let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

messages.pop()
console.log(messages)

