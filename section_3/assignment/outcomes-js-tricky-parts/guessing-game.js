function guessingGame() {

    const randNum = Math.floor(Math.random()*100)
    let hasWon = false;
    let guessCount = 0;

    return function guess(guess){
        if(hasWon) return "The game is over, you already won!";
        guessCount++;
        if(guess === randNum){
            hasWon = true;
            let numGuesses = guessCount === 1 ? "guess" : "guesses";
            return `You win! You found ${guess} in ${guessCount} ${numGuesses}.`;
        }
        if(guess < randNum) return `${guess} is too low!`;
        if(guess > randNum) return `${guess} is too high!`;
    }
}

module.exports = { guessingGame };
