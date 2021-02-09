/*
Keep track of how many times the player and computer each win, and report the scores after each game. The first player to win 5 games wins the overall match (a series of 2 or more games). The score should reset to 0 for each player when beginning a new match. Don't use any global variables. However, you may want to use a global constant to represent the number of games needed to win the match.
*/
let readline = require("readline-sync");

const TOTAL_WINS = 5;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function keepScore() {
  let humanWins = 0;
  let computerWins = 0;

  prompt("Computer or Human? 'c' or 'h'");
  question = readline.question().trim();

  if (question === 'c') {
    computerWins++;
  } else if (question === 'h') {
    humanWins++;
  } else {
    prompt("Invalid input, please try again.");
    keepScore();
  }

  if (humanWins === TOTAL_WINS) {
    prompt(`Human wins the overall match!`);
  } else if (computerWins === TOTAL_WINS) {
    prompt(`Computer wins the overall match!`);
  }
}

keepScore();
