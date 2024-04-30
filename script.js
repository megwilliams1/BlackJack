// console.log(4 === 3) false
// console.log(5 > 2) true
// console.log(12 > 12) false
// console.log(3 < 0) false
// console.log(3 >= 3) true
// console.log(11 <= 11) true
// console.log(3 <= 2) false

let message = ""

let firstCard = 10
let secondCard = 7

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    message = "Do you want to draw a new card? 🤗"
} else if (sum === 21) {
    message = "wohoo! You've got Blackjack! 😁"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😊"
    isAlive = false
}


console.log(isAlive)
console.log(message)

