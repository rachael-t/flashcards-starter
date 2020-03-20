const Turn = require('../src/Turn');

class Round {
  constructor (deck) {
    this.currentCard = deck;
    this.incorrectGuesses = [];
    this.turnsTaken = 0;
    this.percentageCorrect = 0;
  }
  returnCurrentCard() {
    return this.currentCard.cards[this.turnsTaken];
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.selectedCard.id);
    }
    this.turnsTaken++;
    this.returnCurrentCard();
    this.calculateAccuracy();
    return turn.giveFeedback();
  }
  calculateAccuracy() {
    let numCorrect = this.turnsTaken - this.incorrectGuesses.length;
    this.percentageCorrect = Math.floor((numCorrect / this.turnsTaken) * 100);
  }
  endRound() {
    return `** Round over! ** You answered ${this.percentageCorrect}% of the questions correctly!`;
  }
}

module.exports = Round;
