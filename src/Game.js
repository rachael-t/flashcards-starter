const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = {};
  }
  start() {
    const cards = prototypeQuestions.map(function(prototypeData) {
      const card = new Card(prototypeData.id, prototypeData.question, prototypeData.answers, prototypeData.correctAnswer)
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    console.log(this.currentRound);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }


  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
