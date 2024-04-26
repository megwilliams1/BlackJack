let firstCard = 10
let secondCard = 7

let sum = firstCard + secondCard

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🤗")
} else if (sum === 21) {
    console.log("wohoo! You've got Blackjack! 😁")
} else (sum > 21) {
    console.log("You're out of the game! 😊")
}