# FlashCards

## Abstract

This project was to write a program to simulate a set of flashcards to be played through the command line. In doing so, we were challenged to create multiple, small class to practice modular code that followed single responsibility principle. Additionally, this project was excellent practice in implementing code using TDD.

![flashcards application gif](https://asciinema.org/a/TOXY0GEl4H5AiG1ls3UQFDSEZ.svg)](https://asciinema.org/a/TOXY0GEl4H5AiG1ls3UQFDSEZ)

## Setup

Clone down the repo. Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 25 passing tests.

Running `node index.js` from the root of your project should start the game.

When the game has started, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards.
