// console.log(4 === 3) false
// console.log(5 > 2) true
// console.log(12 > 12) false
// console.log(3 < 0) false
// console.log(3 >= 3) true
// console.log(11 <= 11) true
// console.log(3 <= 2) false

let message = ""

let firstCard = 10
let secondCard = 4

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("sum-el")

let cardsEl = document.getElementById("cards-el")

function startGame() {
    sumEl.textContent = "Sum: " + sum
cardsEl.textContent = "Cards: " + firstCard + " " + secondCard 

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    
    
   messageEl.textContent = message

    
}

function newCard() {

console.log("Drawing a new card from the deck!")

}



