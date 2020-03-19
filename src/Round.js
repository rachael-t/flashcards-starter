const Turn = require('../src/Turn');

class Round {
  constructor (deck) {
    this.currentCard = deck;
    this.incorrectGuesses = [];
    this.turnsTaken = 0;
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
    return turn.giveFeedback();
    this.returnCurrentCard();
    this.calculateAccuracy();
  }
  calculateAccuracy() {
    let numCorrect = this.turnsTaken -this.incorrectGuesses.length;
    let accuracy = Math.floor((numCorrect / this.turnsTaken) * 100);
    if (this.currentCard.cards.length === this.turnsTaken) {
      this.endRound(accuracy);
    }
    return accuracy;
  }
  endRound(accuracy) {
    return `** Round over! ** You answered ${accuracy}% of the questions correctly!`);
  }
};

module.exports = Round;
