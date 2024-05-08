// console.log(4 === 3) false
// console.log(5 > 2) true
// console.log(12 > 12) false
// console.log(3 < 0) false
// console.log(3 >= 3) true
// console.log(11 <= 11) true
// console.log(3 <= 2) false


let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    return 5
}


function startGame() {
    renderGame()
}

function renderGame() {

cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " "
    }

sumEl.textContent = "Sum: " + sum


    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "You've got Blackjack!"
            hasBlackJack = true
        } else {
            message = "You're out of the game!"
            isAlive = false
        }
        
        console.log("Drawing a new card from the deck!")
        
       messageEl.textContent = message

      
}

function newCard() {
let card = getRandomCard()
sum += card
cards.push(card)
console.log(cards)
renderGame() 


}



