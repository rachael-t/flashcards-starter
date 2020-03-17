class Turn {
  constructor(guess, cardInfo) {
    this.guess = guess;
    this.selectedCard = cardInfo;
    this.guessCorrect = false;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.selectedCard;
  }
  evaluateGuess() {
    if (this.guess === this.selectedCard.correctAnswer) {
      this.guessCorrect = true;
      return this.guessCorrect;
    } else {
      this.guessCorrect = false;
      return this.guessCorrect;
    }
    giveFeedback();
  }
  giveFeedback() {
    if (this.guessCorrect) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
};

module.exports = Turn;
