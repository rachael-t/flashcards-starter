const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Card = require('../src/Card');
const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();

    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();

    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round when the game is started', function() {
    const cards = prototypeQuestions.map(function(prototypeData) {
      const card = new Card(prototypeData.id, prototypeData.question, prototypeData.answers, prototypeData.correctAnswer)
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    const game = new Game();

    expect(game.currentRound).to.deep.equal({});
    game.start();
    expect(game.currentRound).to.deep.equal(round);
  });


});
